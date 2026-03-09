"use client";

import { useEffect, useState, useCallback } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface LeafletMapProps {
  activeCounty: string | null;
  onCountyClick: (name: string | null) => void;
  fipsToName: Record<string, string>;
  countyColors: Record<string, string>;
}

// Custom HQ marker icon
const hqIcon = new L.DivIcon({
  html: `<div style="
    width: 32px; height: 32px;
    background: #009FE3;
    border: 3px solid white;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    display: flex; align-items: center; justify-content: center;
  ">
    <div style="
      width: 10px; height: 10px;
      background: white;
      border-radius: 50%;
      transform: rotate(45deg);
    "></div>
  </div>`,
  className: "",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Component to handle map view changes
function MapController({ activeCounty, geoData, fipsToName }: {
  activeCounty: string | null;
  geoData: GeoJSON.FeatureCollection | null;
  fipsToName: Record<string, string>;
}) {
  const map = useMap();

  useEffect(() => {
    if (!geoData) return;

    if (activeCounty) {
      const feature = geoData.features.find(
        (f) => fipsToName[f.id as string] === activeCounty
      );
      if (feature) {
        const geoJsonLayer = L.geoJSON(feature);
        const bounds = geoJsonLayer.getBounds();
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 11 });
      }
    } else {
      map.setView([28.35, -81.35], 9);
    }
  }, [activeCounty, geoData, fipsToName, map]);

  return null;
}

export default function LeafletMap({
  activeCounty,
  onCountyClick,
  fipsToName,
  countyColors,
}: LeafletMapProps) {
  const [geoData, setGeoData] = useState<GeoJSON.FeatureCollection | null>(null);

  useEffect(() => {
    fetch("/data/central-fl-counties.json")
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch(console.error);
  }, []);

  const styleFeature = useCallback(
    (feature: GeoJSON.Feature | undefined) => {
      if (!feature) return {};
      const name = fipsToName[feature.id as string] || "";
      const color = countyColors[name] || "#009FE3";
      const isActive = name === activeCounty;

      return {
        fillColor: color,
        fillOpacity: isActive ? 0.45 : 0.2,
        color: isActive ? color : "#888",
        weight: isActive ? 3 : 1.5,
        opacity: isActive ? 1 : 0.6,
      };
    },
    [activeCounty, fipsToName, countyColors]
  );

  const onEachFeature = useCallback(
    (feature: GeoJSON.Feature, layer: L.Layer) => {
      const name = fipsToName[feature.id as string] || "Unknown";
      const color = countyColors[name] || "#009FE3";

      layer.bindTooltip(name, {
        sticky: true,
        direction: "top",
        offset: [0, -10],
        className: "county-tip",
      });

      layer.on({
        mouseover: (e) => {
          const target = e.target as L.Path;
          target.setStyle({
            fillOpacity: 0.4,
            weight: 2.5,
            color: color,
            opacity: 0.9,
          });
          target.bringToFront();
        },
        mouseout: (e) => {
          const target = e.target as L.Path;
          const isActive = name === activeCounty;
          target.setStyle({
            fillOpacity: isActive ? 0.45 : 0.2,
            weight: isActive ? 3 : 1.5,
            color: isActive ? color : "#888",
            opacity: isActive ? 1 : 0.6,
          });
        },
        click: () => {
          onCountyClick(name);
        },
      });
    },
    [activeCounty, onCountyClick, fipsToName, countyColors]
  );

  return (
    <>
      <style>{`
        .county-tip {
          background: white !important;
          border: 1px solid #e0e0e0 !important;
          border-radius: 8px !important;
          padding: 6px 12px !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          color: #333 !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12) !important;
        }
      `}</style>
      <MapContainer
        center={[28.35, -81.35]}
        zoom={9}
        scrollWheelZoom={false}
        zoomControl={true}
        dragging={true}
        doubleClickZoom={true}
        style={{ width: "100%", height: "100%", zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {geoData && (
          <GeoJSON
            key={activeCounty || "all"}
            data={geoData}
            style={styleFeature}
            onEachFeature={onEachFeature}
          />
        )}

        <MapController
          activeCounty={activeCounty}
          geoData={geoData}
          fipsToName={fipsToName}
        />

        <Marker position={[28.2919, -81.4076]} icon={hqIcon}>
          <Popup>
            <div style={{ textAlign: "center", padding: "4px" }}>
              <strong style={{ fontSize: "13px" }}>Pure Agua HQ</strong>
              <br />
              <span style={{ fontSize: "11px", color: "#666" }}>Kissimmee, FL</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

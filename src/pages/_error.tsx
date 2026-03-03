import type { NextPageContext } from "next";

function Error({ statusCode }: { statusCode: number }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 700, color: "#009FE3", marginBottom: "1rem" }}>
          {statusCode}
        </h1>
        <p style={{ color: "#64748b", marginBottom: "2rem" }}>
          {statusCode === 404 ? "Page not found" : "An error occurred"}
        </p>
        <a href="/" style={{ color: "#009FE3", textDecoration: "underline" }}>
          Go Home
        </a>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode: statusCode || 500 };
};

export default Error;

import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, position, experience, message } =
      body;

    if (!firstName || !lastName || !email || !phone || !position) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const res = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        firstName,
        lastName,
        email,
        phone,
        tags: ["careers", `position-${position}`],
        source: "Website Careers Form",
        customFields: [
          {
            key: "position_applied",
            field_value: position,
          },
          {
            key: "years_experience",
            field_value: experience,
          },
          {
            key: "career_message",
            field_value: message,
          },
        ],
      }),
    });

    const data = await res.json();

    // Handle duplicate contact — GHL returns 400 with existing contactId
    if (!res.ok && data.meta?.contactId) {
      // Update the existing contact with career tags/fields
      const updateRes = await fetch(
        `https://services.leadconnectorhq.com/contacts/${data.meta.contactId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${GHL_API_KEY}`,
            "Content-Type": "application/json",
            Version: "2021-07-28",
          },
          body: JSON.stringify({
            tags: ["careers", `position-${position}`],
            source: "Website Careers Form",
            customFields: [
              { key: "position_applied", field_value: position },
              { key: "years_experience", field_value: experience },
              { key: "career_message", field_value: message },
            ],
          }),
        }
      );

      if (!updateRes.ok) {
        const err = await updateRes.text();
        console.error("GHL update error:", updateRes.status, err);
        return NextResponse.json(
          { error: "Failed to submit application" },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        contactId: data.meta.contactId,
      });
    }

    if (!res.ok) {
      console.error("GHL API error:", res.status, JSON.stringify(data));
      return NextResponse.json(
        { error: "Failed to submit application" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, contactId: data.contact?.id });
  } catch (error) {
    console.error("Careers API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

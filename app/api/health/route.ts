import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const required = ["AMADEUS_CLIENT_ID", "AMADEUS_CLIENT_SECRET", "AMADEUS_ENV"] as const;

  const missing = required.filter((k) => !process.env[k] || String(process.env[k]).trim() === "");

  return NextResponse.json(
    {
      ok: missing.length === 0,
      service: "orbital-intel",
      env: process.env.AMADEUS_ENV ?? null,
      missing,
      timestamp: new Date().toISOString(),
    },
    { status: missing.length === 0 ? 200 : 500 }
  );
}
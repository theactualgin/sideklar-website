import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = "sideklar@gmail.com";
// TODO: once a domain is verified in Resend, change FROM to e.g. "hei@sideklar.no"
const FROM = "onboarding@resend.dev";

function formatBody(body: Record<string, string>): string {
  return Object.entries(body)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}

export async function POST(request: Request) {
  const body = await request.json();

  const isRetainer = body.type === "retainer";
  const isHelsesjekk = body.type === "helsesjekk";

  let subject = "Ny henvendelse — Sideklar";

  if (isRetainer) {
    subject = body.plan
      ? `Retainer-forespørsel: ${body.plan}`
      : "Retainer-forespørsel (usikker på pakke)";
  } else if (isHelsesjekk) {
    subject = "Gratis helsesjekk-forespørsel";
  }

  const text = formatBody({
    Type: body.type ?? "",
    Pakke: body.plan ?? "",
    Navn: body.name ?? "",
    "E-post": body.email ?? "",
    "Nettside / URL": body.url ?? "",
    Melding: body.message ?? "",
  });

  try {
    await resend.emails.send({ from: FROM, to: TO, subject, text });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

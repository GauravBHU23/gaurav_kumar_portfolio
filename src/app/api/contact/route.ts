import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Basic email format check
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    // Honeypot field — bots fill it, humans don't.
    const website = String(body.website ?? "").trim();

    if (website) {
      // Silently accept to not tip off the bot.
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are all required." },
        { status: 400 }
      );
    }
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 400 }
      );
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || user;

    if (!user || !pass) {
      console.error("SMTP_USER / SMTP_PASS env vars are not configured.");
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465, // true for 465, false for 587
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Gaurav Kumar" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `📩 New message from ${name}`,
      text: `New portfolio contact message\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: buildEmailHtml(name, email, message),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Responsive, email-client-safe HTML template (table + inline styles).
 * Renders cleanly on desktop and mobile (Gmail, Outlook, Apple Mail, etc.).
 */
function buildEmailHtml(name: string, email: string, message: string) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");
  const initial = escapeHtml((name.trim()[0] || "?").toUpperCase());

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="color-scheme" content="light dark"/>
<title>New Portfolio Message</title>
</head>
<body style="margin:0;padding:0;background-color:#eef2f7;-webkit-text-size-adjust:100%;">
  <!-- Preheader (hidden preview text) -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    New message from ${safeName} via your portfolio.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef2f7;padding:24px 12px;">
    <tr>
      <td align="center">
        <!-- Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
               style="max-width:560px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 6px 24px rgba(15,23,42,0.08);font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1d57f5 0%,#7c3aed 100%);padding:28px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <div style="color:#ffffff;font-size:20px;font-weight:700;line-height:1.2;">
                      📩 New Portfolio Message
                    </div>
                    <div style="color:#dbe7ff;font-size:13px;margin-top:4px;">
                      Someone reached out from your website
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender -->
          <tr>
            <td style="padding:28px 28px 8px 28px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;padding-right:14px;">
                    <div style="width:48px;height:48px;border-radius:50%;background:#1d57f5;color:#ffffff;font-size:20px;font-weight:700;text-align:center;line-height:48px;">
                      ${initial}
                    </div>
                  </td>
                  <td style="vertical-align:middle;">
                    <div style="font-size:16px;font-weight:600;color:#0f172a;">${safeName}</div>
                    <a href="mailto:${safeEmail}" style="font-size:14px;color:#1d57f5;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:16px 28px 8px 28px;">
              <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#64748b;margin-bottom:8px;">
                Message
              </div>
              <div style="background:#f1f5f9;border-left:4px solid #1d57f5;border-radius:8px;padding:16px 18px;font-size:15px;line-height:1.65;color:#334155;">
                ${safeMessage}
              </div>
            </td>
          </tr>

          <!-- Reply button -->
          <tr>
            <td style="padding:20px 28px 28px 28px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeEmail}"
                       style="display:inline-block;background:#1d57f5;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:999px;">
                      ↩ Reply to ${safeName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:18px 28px;border-top:1px solid #e2e8f0;">
              <div style="font-size:12px;color:#94a3b8;text-align:center;line-height:1.5;">
                This message was sent from the contact form on your portfolio website.
              </div>
            </td>
          </tr>
        </table>

        <div style="font-size:11px;color:#b6c2d1;margin-top:16px;font-family:'Segoe UI',Arial,sans-serif;">
          © ${new Date().getFullYear()} Gaurav Kumar — Portfolio
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

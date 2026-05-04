import { Resend } from "resend";
import type { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = "premierexmkt@gmail.com";

function emailHtml(data: {
  name: string;
  email: string;
  phone: string;
  unitType: string;
  message: string;
}) {
  const { name, email, phone, unitType, message } = data;
  const submitted = new Date().toLocaleString("en-MY", {
    timeZone: "Asia/Kuala_Lumpur",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Viewing Request | KIMORI</title>
</head>
<body style="margin:0;padding:0;background:#f5f2ed;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f2ed;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#1a2e1a;padding:40px 48px 32px;text-align:center;border-radius:12px 12px 0 0;">
              <p style="margin:0 0 8px;color:#c8a96e;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-family:monospace;">木森</p>
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:400;letter-spacing:2px;">KIMORI</h1>
              <p style="margin:8px 0 0;color:#9ab89a;font-size:13px;letter-spacing:1px;">Serdang Hilltop Condominium</p>
            </td>
          </tr>

          <!-- Accent bar -->
          <tr>
            <td style="background:#c8a96e;height:3px;"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px 48px;">
              <p style="margin:0 0 6px;color:#c8a96e;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-family:monospace;">New Enquiry</p>
              <h2 style="margin:0 0 28px;color:#1a2e1a;font-size:22px;font-weight:400;">Reserve a Viewing Request</h2>

              <!-- Details table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid #ece8e1;width:36%;vertical-align:top;">
                    <span style="color:#9ab89a;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;font-family:monospace;">Name</span>
                  </td>
                  <td style="padding:14px 0;border-bottom:1px solid #ece8e1;color:#1a2e1a;font-size:16px;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid #ece8e1;vertical-align:top;">
                    <span style="color:#9ab89a;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;font-family:monospace;">Email</span>
                  </td>
                  <td style="padding:14px 0;border-bottom:1px solid #ece8e1;">
                    <a href="mailto:${email}" style="color:#c8a96e;font-size:16px;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid #ece8e1;vertical-align:top;">
                    <span style="color:#9ab89a;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;font-family:monospace;">Phone</span>
                  </td>
                  <td style="padding:14px 0;border-bottom:1px solid #ece8e1;">
                    <a href="tel:${phone}" style="color:#c8a96e;font-size:16px;text-decoration:none;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid #ece8e1;vertical-align:top;">
                    <span style="color:#9ab89a;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;font-family:monospace;">Unit Interest</span>
                  </td>
                  <td style="padding:14px 0;border-bottom:1px solid #ece8e1;color:#1a2e1a;font-size:16px;">
                    ${unitType}
                  </td>
                </tr>
                ${
                  message
                    ? `<tr>
                  <td style="padding:14px 0;vertical-align:top;">
                    <span style="color:#9ab89a;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;font-family:monospace;">Message</span>
                  </td>
                  <td style="padding:14px 0;color:#1a2e1a;font-size:16px;line-height:1.6;">
                    ${message.replace(/\n/g, "<br/>")}
                  </td>
                </tr>`
                    : ""
                }
              </table>

              <!-- CTA button -->
              <div style="margin-top:36px;text-align:center;">
                <a href="mailto:${email}?subject=Re: KIMORI Viewing Request"
                   style="display:inline-block;background:#1a2e1a;color:#ffffff;padding:14px 36px;border-radius:4px;font-size:14px;letter-spacing:1.5px;text-decoration:none;text-transform:uppercase;font-family:monospace;">
                  Reply to Prospect
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#1a2e1a;padding:28px 48px;border-radius:0 0 12px 12px;">
              <p style="margin:0;color:#9ab89a;font-size:12px;text-align:center;line-height:1.8;">
                KIMORI Residences · Bukit Serdang, Selangor, Malaysia<br/>
                <span style="color:#5a7a5a;font-size:11px;">Submitted ${submitted}</span>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, phone, unitType, message = "" } = body;

  if (!name || !email || !phone || !unitType) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "KIMORI Residences <onboarding@resend.dev>",
    to: [RECIPIENT],
    replyTo: email,
    subject: `New Viewing Request: ${name}`,
    html: emailHtml({ name, email, phone, unitType, message }),
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }

  return Response.json({ ok: true });
}

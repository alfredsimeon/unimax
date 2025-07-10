import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Email configuration - these should be environment variables
const SMTP_CONFIG = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "your-email@gmail.com", // Your Gmail address
    pass: process.env.SMTP_PASS || "your-app-password", // Your Gmail App Password
  },
}

const COMPANY_EMAILS = ["info@unimax-sl.com", "unimaxsl@gmail.com"]

// Email sending function using Nodemailer
async function sendEmail(formData: any) {
  try {
    // Create transporter
    const transporter = nodemailer.createTransporter(SMTP_CONFIG)

    // Email content
    const mailOptions = {
      from: `"Unimax-SL Website" <${SMTP_CONFIG.auth.user}>`,
      to: COMPANY_EMAILS.join(", "),
      replyTo: formData.email,
      subject: `${formData.service ? `[${formData.service}] ` : ""}${formData.subject || "Contact Form Inquiry"} - Unimax-SL Website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #3D3540; color: white; padding: 20px; text-align: center;">
            <h1>🚚 New Contact Form Submission</h1>
            <p>Unimax-SL Website</p>
          </div>

          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #3D3540; margin-bottom: 20px;">📋 Contact Details</h2>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #3D3540; width: 30%;">👤 Name:</td>
                  <td style="padding: 12px 0; color: #666;">${formData.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #3D3540;">📧 Email:</td>
                  <td style="padding: 12px 0; color: #666;"><a href="mailto:${formData.email}" style="color: #7DAEB3; text-decoration: none;">${formData.email}</a></td>
                </tr>
                ${formData.phone ? `
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #3D3540;">📞 Phone:</td>
                  <td style="padding: 12px 0; color: #666;"><a href="tel:${formData.phone}" style="color: #7DAEB3; text-decoration: none;">${formData.phone}</a></td>
                </tr>
                ` : ""}
                ${formData.service ? `
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #3D3540;">🎯 Service:</td>
                  <td style="padding: 12px 0; color: #666;"><span style="background-color: #7DAEB3; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">${formData.service}</span></td>
                </tr>
                ` : ""}
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #3D3540;">📝 Subject:</td>
                  <td style="padding: 12px 0; color: #666;">${formData.subject || "No subject provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #3D3540;">⏰ Submitted:</td>
                  <td style="padding: 12px 0; color: #666;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>

            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #3D3540; margin-bottom: 15px;">💬 Message:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #7DAEB3; border-radius: 4px;">
                <p style="color: #666; line-height: 1.6; margin: 0; white-space: pre-wrap;">${formData.message}</p>
              </div>
            </div>

            <div style="margin-top: 20px; padding: 20px; background-color: #7DAEB3; color: white; border-radius: 8px;">
              <h4 style="margin: 0 0 10px 0;">⚡ Quick Actions:</h4>
              <p style="margin: 8px 0;">
                <a href="mailto:${formData.email}?subject=Re: ${formData.subject || 'Your Inquiry'}" style="color: white; text-decoration: none; background-color: rgba(255,255,255,0.2); padding: 8px 12px; border-radius: 4px; display: inline-block;">
                  📧 Reply to ${formData.name}
                </a>
              </p>
              ${formData.phone ? `
              <p style="margin: 8px 0;">
                <a href="tel:${formData.phone}" style="color: white; text-decoration: none; background-color: rgba(255,255,255,0.2); padding: 8px 12px; border-radius: 4px; display: inline-block;">
                  📞 Call ${formData.phone}
                </a>
              </p>
              ` : ""}
            </div>
          </div>

          <div style="background-color: #3D3540; color: white; padding: 20px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This email was sent from the Unimax-SL website contact form.</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">🌐 unimax-sl.com | 📧 info@unimax-sl.com | 📞 +232 78 616420</p>
          </div>
        </div>
      `,
      text: `
🚚 NEW CONTACT FORM SUBMISSION - UNIMAX-SL WEBSITE

📋 CONTACT DETAILS:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone || "Not provided"}
🎯 Service Interest: ${formData.service || "Not specified"}
📝 Subject: ${formData.subject || "No subject"}
⏰ Submitted: ${new Date().toLocaleString()}

💬 MESSAGE:
${formData.message}

⚡ QUICK ACTIONS:
📧 Reply to: ${formData.email}
${formData.phone ? `📞 Call: ${formData.phone}` : ""}

---
This email was sent from the Unimax-SL website contact form.
🌐 unimax-sl.com | 📧 info@unimax-sl.com | 📞 +232 78 616420
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully:", info.messageId)
    return { success: true, messageId: info.messageId }

  } catch (error) {
    console.error("Email sending failed:", error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required." },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 })
    }

    // Basic spam protection - check for suspicious content
    const suspiciousPatterns = [
      /viagra/i,
      /casino/i,
      /lottery/i,
      /winner/i,
      /congratulations.*won/i,
      /click.*here.*now/i,
    ]

    const messageContent = `${formData.name} ${formData.email} ${formData.subject} ${formData.message}`.toLowerCase()
    const isSpam = suspiciousPatterns.some((pattern) => pattern.test(messageContent))

    if (isSpam) {
      return NextResponse.json({ error: "Message flagged as spam. Please contact us directly." }, { status: 400 })
    }

    // Send email
    await sendEmail(formData)

    // Log successful submission (in production, you might want to store this in a database)
    console.log(`Contact form submission from ${formData.email} at ${new Date().toISOString()}`)

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully! We will get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again or contact us directly." },
      { status: 500 },
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}

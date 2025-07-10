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

// Email sending function for newsletter signups
async function sendNewsletterEmail(email: string) {
  try {
    // Create transporter
    const transporter = nodemailer.createTransporter(SMTP_CONFIG)

    // Email content
    const mailOptions = {
      from: `"Unimax-SL Website" <${SMTP_CONFIG.auth.user}>`,
      to: COMPANY_EMAILS.join(", "),
      replyTo: email,
      subject: "📧 New Newsletter Subscription - Unimax-SL Website",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #3D3540; color: white; padding: 20px; text-align: center;">
            <h1>📧 New Newsletter Subscription</h1>
            <p>Unimax-SL Website</p>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #3D3540; margin-bottom: 20px;">📋 Subscription Details</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #3D3540; width: 30%;">📧 Email:</td>
                  <td style="padding: 12px 0; color: #666;"><a href="mailto:${email}" style="color: #7DAEB3; text-decoration: none;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; font-weight: bold; color: #3D3540;">📝 Type:</td>
                  <td style="padding: 12px 0; color: #666;"><span style="background-color: #7DAEB3; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Newsletter Subscription</span></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #3D3540;">⏰ Subscribed:</td>
                  <td style="padding: 12px 0; color: #666;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #3D3540; margin-bottom: 15px;">📝 Action Required:</h3>
              <p style="color: #666; line-height: 1.6; margin: 0;">
                A new user has subscribed to your newsletter. Consider adding them to your mailing list and sending a welcome email.
              </p>
            </div>
            
            <div style="margin-top: 20px; padding: 20px; background-color: #7DAEB3; color: white; border-radius: 8px;">
              <h4 style="margin: 0 0 10px 0;">⚡ Quick Actions:</h4>
              <p style="margin: 8px 0;">
                <a href="mailto:${email}?subject=Welcome to Unimax-SL Newsletter" style="color: white; text-decoration: none; background-color: rgba(255,255,255,0.2); padding: 8px 12px; border-radius: 4px; display: inline-block;">
                  📧 Send Welcome Email
                </a>
              </p>
            </div>
          </div>
          
          <div style="background-color: #3D3540; color: white; padding: 20px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">This email was sent from the Unimax-SL website newsletter signup.</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">🌐 unimax-sl.com | 📧 info@unimax-sl.com | 📞 +232 78 616420</p>
          </div>
        </div>
      `,
      text: `
📧 NEW NEWSLETTER SUBSCRIPTION - UNIMAX-SL WEBSITE

📋 SUBSCRIPTION DETAILS:
📧 Email: ${email}
📝 Type: Newsletter Subscription
⏰ Subscribed: ${new Date().toLocaleString()}

📝 ACTION REQUIRED:
A new user has subscribed to your newsletter. Consider adding them to your mailing list and sending a welcome email.

⚡ QUICK ACTIONS:
📧 Send welcome email to: ${email}

---
This email was sent from the Unimax-SL website newsletter signup.
🌐 unimax-sl.com | 📧 info@unimax-sl.com | 📞 +232 78 616420
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log("Newsletter email sent successfully:", info.messageId)
    return { success: true, messageId: info.messageId }

  } catch (error) {
    console.error("Newsletter email sending failed:", error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Validate required fields
    if (!formData.email) {
      return NextResponse.json(
        { error: "Email is required for newsletter subscription." },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 })
    }

    // Send email
    await sendNewsletterEmail(formData.email)

    // Log successful submission
    console.log(`Newsletter subscription from ${formData.email} at ${new Date().toISOString()}`)

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter! Thank you for your interest.",
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json(
      { error: "Failed to subscribe to newsletter. Please try again or contact us directly." },
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

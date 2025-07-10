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

// Simple email sending function using fetch to a mail service
async function sendEmail(formData: any) {
  const emailContent = {
    to: COMPANY_EMAILS,
    from: "noreply@unimax-sl.com",
    subject: `${formData.service ? `[${formData.service}] ` : ""}${formData.subject || "Contact Form Inquiry"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #3D3540; color: white; padding: 20px; text-align: center;">
          <h1>New Contact Form Submission</h1>
          <p>Unimax-SL Website</p>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #3D3540;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Service Interest:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.service || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Subject:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${formData.subject || "No subject"}</td>
            </tr>
          </table>
          
          <h3 style="color: #3D3540; margin-top: 20px;">Message:</h3>
          <div style="background-color: white; padding: 15px; border-left: 4px solid #7DAEB3; margin: 10px 0;">
            ${formData.message.replace(/\n/g, "<br>")}
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #7DAEB3; color: white; border-radius: 5px;">
            <p style="margin: 0;"><strong>Quick Actions:</strong></p>
            <p style="margin: 5px 0;">
              📧 Reply to: <a href="mailto:${formData.email}" style="color: white;">${formData.email}</a>
            </p>
            ${formData.phone ? `<p style="margin: 5px 0;">📞 Call: <a href="tel:${formData.phone}" style="color: white;">${formData.phone}</a></p>` : ""}
          </div>
        </div>
        
        <div style="background-color: #3D3540; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p>This email was sent from the Unimax-SL website contact form.</p>
          <p>Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission - Unimax-SL Website

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Service Interest: ${formData.service || "Not specified"}
Subject: ${formData.subject || "No subject"}

Message:
${formData.message}

---
Reply to: ${formData.email}
${formData.phone ? `Call: ${formData.phone}` : ""}
Submitted on: ${new Date().toLocaleString()}
    `,
  }

  // For demonstration, we'll use a mock email service
  // In production, you would integrate with your actual email service
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email would be sent to:", COMPANY_EMAILS)
      console.log("Email content:", emailContent)
      resolve({ success: true })
    }, 1000)
  })
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

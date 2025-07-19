// Quick email test script
import nodemailer from 'nodemailer';

const SMTP_CONFIG = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "unimaxsl@gmail.com",
    pass: "Admin@unimax.sl",
  },
};

async function testEmail() {
  try {
    console.log('🧪 Testing email configuration...');
    
    const transporter = nodemailer.createTransport(SMTP_CONFIG);
    
    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection successful!');
    
    // Send test email
    const info = await transporter.sendMail({
      from: '"Unimax-SL Test" <unimaxsl@gmail.com>',
      to: 'info@unimax-sl.com, unimaxsl@gmail.com',
      subject: '🧪 Email System Test - Unimax-SL',
      text: 'This is a test email to verify the email system is working correctly.',
      html: '<h1>✅ Email System Test</h1><p>This is a test email to verify the email system is working correctly.</p>'
    });
    
    console.log('✅ Test email sent successfully!');
    console.log('📧 Message ID:', info.messageId);
    
  } catch (error) {
    console.log('❌ Email test failed:');
    console.log('Error:', error.message);
    
    if (error.message.includes('Invalid login')) {
      console.log('\n🔧 SOLUTION: You need to:');
      console.log('1. Enable 2-Factor Authentication on unimaxsl@gmail.com');
      console.log('2. Generate an App Password');
      console.log('3. Replace "Admin@unimax.sl" with the App Password');
      console.log('4. App Password guide: https://support.google.com/accounts/answer/185833');
    }
  }
}

testEmail();

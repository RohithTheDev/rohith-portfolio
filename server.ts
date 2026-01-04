import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'rohithpasuveswaran.2112@gmail.com',
    pass: process.env.EMAIL_PASSWORD || '', // Use app-specific password for Gmail
  }
});

interface EmailRequest {
  name: string;
  email: string;
  message: string;
}

// Email sending endpoint
app.post('/api/send-email', async (req: Request, res: Response) => {
  try {
    const { name, email, message }: EmailRequest = req.body;

    // Validate inputs
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Email to admin (portfolio owner)
    const adminMailOptions = {
      from: process.env.EMAIL_USER || 'rohithpasuveswaran.2112@gmail.com',
      to: process.env.EMAIL_USER || 'rohithpasuveswaran.2112@gmail.com',
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Email confirmation to sender
    const senderMailOptions = {
      from: process.env.EMAIL_USER || 'rohithpasuveswaran.2112@gmail.com',
      to: email,
      subject: 'We received your message',
      html: `
        <h2>Thank You for Reaching Out!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <br>
        <p>Best regards,<br>Rohith Pasuveswaran</p>
      `
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(senderMailOptions);

    res.json({
      success: true,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email'
    });
  }
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

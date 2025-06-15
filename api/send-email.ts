import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

// Remove the edge runtime config as we're using Node.js runtime
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return res.status(500).json({ error: 'Email service configuration error' });
    }

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'joshzeng7@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log('Email sent successfully:', result);
    return res.status(200).json({ message: 'Email sent', data: result });
  } catch (error: any) {
    console.error('Detailed Resend Error:', {
      message: error?.message,
      status: error?.status,
      code: error?.code,
      stack: error?.stack
    });
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error?.message || 'Unknown error'
    });
  }
}

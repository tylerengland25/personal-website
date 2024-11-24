import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

// Initialize SendGrid with the API key from GitHub secrets
sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Debug log to check environment variables
    console.log('MY_EMAIL:', process.env.MY_EMAIL);

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!process.env.MY_EMAIL) {
      return NextResponse.json(
        { error: 'Server configuration error: Missing recipient email' },
        { status: 500 }
      );
    }

    const msg = {
      to: process.env.MY_EMAIL,
      from: process.env.MY_EMAIL, // Verified sender email
      replyTo: email,
      subject: `Portfolio Contact Form: Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Debug log to check email object
    console.log('Email config:', {
      to: msg.to,
      from: msg.from,
      subject: msg.subject,
    });

    await sendgrid.send(msg);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('SendGrid Error:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to send email',
      },
      { status: 500 }
    );
  }
}

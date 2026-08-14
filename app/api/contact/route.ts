import { NextRequest, NextResponse } from 'next/server';
import emailjs, { EmailJSResponseStatus } from '@emailjs/nodejs';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, topic } = await req.json();

    emailjs.init({
      publicKey: process.env.EMAILJS_PUBLIC_KEY!,
      privateKey: process.env.EMAILJS_PRIVATE_KEY!, // highly recommended
    });

    // The EmailJS template only exposes name/email/message, so the selected door
    // is prefixed onto the body rather than added as a new template variable.
    const body = topic ? `[${topic}]\n\n${message}` : message;

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        name: name,
        email: email,
        message: body,
      }
    );

    console.log('SUCCESS!');
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    if (err instanceof EmailJSResponseStatus) {
      console.error('EMAILJS FAILED...', err);
      return NextResponse.json({ error: 'EmailJS failed', details: err }, { status: 500 });
    }

    console.error('ERROR', err);
    return NextResponse.json({ error: 'Unexpected error', details: err }, { status: 500 });
  }
}

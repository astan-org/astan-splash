import { NextRequest, NextResponse } from 'next/server';
import emailjs, { EmailJSResponseStatus } from '@emailjs/nodejs';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    emailjs.init({
      publicKey: process.env.EMAILJS_PUBLIC_KEY!,
      privateKey: process.env.EMAILJS_PRIVATE_KEY!, // highly recommended
    });

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      {
        name: name,
        email: email,
        message: message,
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

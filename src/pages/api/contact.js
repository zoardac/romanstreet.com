// src/pages/api/contact.js
export const prerender = false;

import { Resend } from 'resend';

// Make sure you have RESEND_API_KEY set in Vercel Environment Variables
const resend = new Resend(import.meta.env.RESEND_API_KEY);

/**
 * Sends an email via Resend
 */
async function sendInquiry(name, email, subject, message) {
  try {
	const { data, error } = await resend.emails.send({
	  from: 'onboarding@resend.dev',       // replace with your verified Resend sender
	  to: 'your-personal-email@gmail.com', // replace with your real email
	  subject: `[${subject}] New Inquiry from ${name}`,
	  reply_to: email,
	  html: `
		<h2>New Inquiry Received!</h2>
		<p><strong>Name:</strong> ${name}</p>
		<p><strong>Email:</strong> ${email}</p>
		<p><strong>Subject:</strong> ${subject}</p>
		<p><strong>Message:</strong></p>
		<p>${message.replace(/\n/g, '<br>')}</p>
		<hr>
		<p>Sent via RomanStreet website contact form.</p>
	  `,
	});

	if (error) {
	  console.error('Resend error:', error);
	  return false;
	}

	console.log('Email sent:', data);
	return true;

  } catch (err) {
	console.error('Email sending exception:', err);
	return false;
  }
}

export const POST = async ({ request }) => {
  const formData = await request.formData();

  const name = formData.get('name')?.toString();
  const email = formData.get('email')?.toString();
  const subject = formData.get('subject')?.toString() || 'General';
  const message = formData.get('message')?.toString();

  if (!name || !email || !message) {
	return new Response(JSON.stringify({ message: 'Missing required fields.' }), { status: 400 });
  }

  const success = await sendInquiry(name, email, subject, message);

  if (success) {
	return new Response(JSON.stringify({ message: 'Success! Your inquiry has been sent.' }), { status: 200 });
  } else {
	return new Response(JSON.stringify({ message: 'Failed to send your inquiry.' }), { status: 500 });
  }
};

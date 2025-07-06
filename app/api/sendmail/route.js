
const myEmail = 'andry21sasso@gmail.com'

let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: myEmail,
    pass: process.env.EMAIL_PASS
  }
});

let mailOptions = {
        from: myEmail,
        to: myEmail,
        subject: 'Email from Portfolio',
        text: '',
        replyTo: ''
    };

export async function POST(request) {
	const { email, message } = await request.json();

	mailOptions.text = message;
	mailOptions.replyTo = email;

	try {
		await transporter.sendMail(mailOptions);
		console.log('Email sent successfully to:', email);
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error('Error sending email:', error);
		return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
	}
}
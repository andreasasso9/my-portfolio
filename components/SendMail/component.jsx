'use client';

export default function SendMail() {
	function sendEmail() {
		const email = document.getElementById('email').value;
		const message = document.getElementById('message').value;

		fetch('/api/sendmail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
				email: email,
				message: message
			})
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				alert('Email sent successfully!');
			})
			.catch((error) => {
				console.error('Error:', error.message);
				alert('Error sending email');
			});
	}

	return (
		<div className="flex flex-col justify-center gap-1 w-auto sm:w-lg">
			<h1 className="text-base sm:text-lg">Send me an Email</h1>
			<input id='email' type='email' placeholder='Insert your email' className="border rounded px-2 py-2 text-xs sm:text-base"></input>
			<textarea id="message" rows={5} placeholder='Insert your message' className="border rounded px-2 py-2 text-xs sm:text-base"></textarea>
			<button onClick={sendEmail} className="border rounded px-4 py-2 text-base">Send</button>
		</div>
	);
}
import SendMail from "@/components/SendMail/component";


export default function Contact() {
  return (
	<div className="flex flex-col items-center justify-center mt-10 px-20 pb-20 text-base">
		<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Contact Me</h1>
		<p className="text-base md:text-xl text-center max-w-2xl">
			If you would like to get in touch, feel free to reach out via email or connect with me on social media
		</p>
		<div className="mt-10 flex flex-col justify-center  text-start gap-4">
			<p className="text-base sm:text-lg">LinkedIn: <a href="https://www.linkedin.com/in/andrea-sasso-82b5b9371/" target="_blank" className="text-blue-500 hover:underline">Andrea Sasso</a></p>
			<SendMail />
		</div>
	</div>
  );
}
export default function Contact() {
  return (
	<div className="flex flex-col items-center justify-center mt-10 px-20 pb-20 text-xl">
		<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Contact Me</h1>
		<p className="text-sm sm:text-l md:text-lg text-center max-w-2xl">
			If you would like to get in touch, feel free to reach out via email or connect with me on social media. I am always open to discussing new projects, ideas, or opportunities.
		</p>
		<div className="mt-10">
			<p className="text-l sm:text-2xl">Email: <a href="mailto:andry-sasso@outlook.it"className="text-blue-500 hover:underline">andry-sasso@outlook.it</a></p>
			<p className="mt-2 text-l sm:text-2xl">LinkedIn: <a href="https://www.linkedin.com/in/andrea-sasso-82b5b9371/" className="text-blue-500 hover:underline">Andrea Sasso</a></p>
		</div>
	</div>
  );
}
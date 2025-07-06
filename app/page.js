import SendMail from "@/components/SendMail/component";

export default function Home() {
  return (
    <div className="flex items-center justify-center mt-10 w-screen">
      <main className="flex flex-col items-center justify-center gap-y-5">
		<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Welcome to My Portfolio 👋</h1>
		<p className="text-base sm:text-xl w-50 sm:w-200">Hello! I’m Andrea Sasso, and this website is my first project built with Next.js. Here, you’ll find information about me, my projects, and how to get in touch</p>
      </main>

    </div>
  );
}

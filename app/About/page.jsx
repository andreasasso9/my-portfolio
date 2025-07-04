export default function About() {
  return (
	<div className="flex flex-col items-center justify-center mt-10 px-20 pb-20">
	  <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">About Me</h1>
	  <section>
			<div className="flex flex-col items-start max-w-3xl gap-5 text-l sm:text-xl md:text-2xl">

				<section>
					<p><strong>Hi! I’m Andrea Sasso</strong>, a passionate young Italian software developer with a keen interest in technology and innovation.</p>
					<br />
					<p>I’m currently completing my Master's degree in Computer Science at the University of Salerno. 
						Throughout my academic journey, I have gained solid knowledge in various areas of computer science, including programming, data structures and algorithms, database design, operating systems, and cybersecurity.</p>

				</section>
				
				<section>
					<h2 className="font-bold">💻 What I Do</h2>
					<ul>
						<li>Develop software in Java, Python, C, and JavaScript, with hands-on experience in object-oriented programming and GUI development.</li>
						<li>Build backend applications using Spring Boot, working with modules like Spring Web, Spring Data JPA, Spring Security, and Thymeleaf.</li>
						<li>Work with relational databases and SQL to efficiently manage and organize data.</li>
						<li>Use Git and GitHub for version control, collaborating in team environments with branching, merging, and pull requests.</li>
						<li>Apply software engineering principles to design and manage complex projects.</li>
					</ul>
				</section>
				

				<section>
					<h2 className="font-bold">🌐 Languages</h2>
					<p>Besides my native Italian, I speak English at an intermediate level (B2), which allows me to read technical documentation, communicate effectively, and work in international teams.</p>
				</section>
				
				<section>
					<h2 className="font-bold">🤝 Soft Skills</h2>
					<ul>
						<li>Empathetic and a team player, always eager to learn.</li>
						<li>Organized and able to balance study and personal life effectively.</li>
						<li>Problem-solving abilities that help me quickly identify and fix bugs or errors in my code.</li>
					</ul>
				</section>
				
				<section>
					<h2 className="font-bold">🎮 Hobbies & Interests</h2>
					<p>I’m passionate about video games, especially strategy, adventure, and shooter genres. I’ve also played competitive sports, including football (ages 6–12) and basketball (ages 12–20), which taught me the value of teamwork and perseverance.</p>
				</section>
			</div>
		</section>

	</div>
  );
}
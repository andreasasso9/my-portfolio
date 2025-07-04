export default function Projects() {
  return (
	<div className="flex flex-col items-center justify-center mt-30 px-20 pb-20">
	  <h1 className="text-4xl font-bold mb-4">My Projects</h1>
	  <p className="text-lg text-center max-w-2xl">
		Here are some of the projects I have worked on:
	  </p>
	  <div className="mt-10">
		<ul className="list-disc list-inside space-y-4">
		  <li><a href="https://streamingmusicale.azurewebsites.net/">Clone Spotify</a> <a href="https://github.com/andreasasso9/ProgettoCloudComputing">(GitHub)</a></li>
		  <li>Clone Vinted <a href="https://github.com/andreasasso9/ProgettoTesi-Server">(Server) </a> <a href="https://github.com/andreasasso9/ProgettoTesi-Client">(Client)</a></li>
		  <li><a href="">This website😁</a></li>
		</ul>
	  </div>
	</div>
  );
}
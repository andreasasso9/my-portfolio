import Link from 'next/link';

export default function Navbar() {
	return (
		<div className="flex justify-between items-center font-bold text-3xl gap-20 max-w-6xl flex-wrap py-10 px-20 z-10">
			<Link href="/">Home</Link>
			<Link href="/About">About me</Link>
			<Link href="/Projects">Projects</Link>
			<Link href="/Contact">Contact</Link>
		</div>

	);
}
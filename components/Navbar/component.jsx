

import Link from 'next/link';

export default function Navbar() {
	return (
		<div className="flex justify-between items-center font-bold gap-5 sm:gap-10 md:gap-15 max-w-full py-10 px-3 z-10 text-lg sm:text-2xl md:text-4xl">
			<Link href="/" className='hover:underline'>Home</Link>
			<Link href="/About" className='hover:underline'>About Me</Link>
			<Link href="/Projects" className='hover:underline'>Projects</Link>
			<Link href="/Contact" className='hover:underline'>Contact</Link>
		</div>

	);
}
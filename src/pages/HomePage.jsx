import { Header } from "../components/HomePage/Header";

export function HomePage() {
	console.log('HomePage component rendered');

	return (
		<div className='bg-cyan-950 h-dvh'>
			<Header/>
		</div>
	);
}

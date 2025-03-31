import { ExclusiveContent } from '../components/HomePage/ExclusiveContent';
import { Header } from '../components/HomePage/Header';
import { Subscription } from '../components/HomePage/Subscription';

export function HomePage() {
	return (
		<div>
			<Header />
			<main>
				<ExclusiveContent />
				<Subscription />
			</main>
		</div>
	);
}

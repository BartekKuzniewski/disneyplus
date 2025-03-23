import { ExclusiveContent } from '../components/HomePage/ExclusiveContent';
import { Header } from '../components/HomePage/Header';

export function HomePage() {
	return (
		<div>
			<Header />
			<main>
				<ExclusiveContent />
			</main>
		</div>
	);
}

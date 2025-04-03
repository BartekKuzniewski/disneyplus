import { ExclusiveContent } from '../components/HomePage/ExclusiveContent';
import { FAQ } from '../components/HomePage/FAQ';
import { Footer } from '../components/HomePage/Footer';
import { Header } from '../components/HomePage/Header';
import { Subscription } from '../components/HomePage/Subscription';
import { SupportedDevices } from '../components/HomePage/SupportedDevices';
import { WatchAnywhere } from '../components/HomePage/WatchAnywhere';

export function HomePage() {
	return (
		<div>
			<Header />
			<main>
				<ExclusiveContent />
				<Subscription />
				<WatchAnywhere />
				<FAQ />
				<SupportedDevices />
			</main>
			<Footer />
		</div>
	);
}

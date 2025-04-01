import { FeatureItem } from '../FeatureItem';
import { Wrapper } from '../Wrapper';

export function WatchAnywhere() {
	const features = [
		{
			imgSrc: '/images/entertaiment.webp', // Tutaj możesz użyć np. ikon z biblioteki react-icons
			title: 'Rozrywka bez granic',
			description: 'Tysiące godzin seriali, filmów i produkcji oryginalnych.',
			alt: 'Ikona rolki filmowej – symbol rozrywki bez granic',
		},
		{
			imgSrc: '/images/favDevices.webp',
			title: 'Dostępny na Twoich ulubionych urządzeniach',
			description:
				'Oglądaj na czterech ekranach jednocześnie, na obsługiwanych urządzeniach.',
			alt: 'Ikona ekranu – symbol obsługi na wielu urządzeniach',
		},
		{
			imgSrc: '/images/parentGuide.webp',
			title: 'Prosta w użyciu kontrola rodzicielska',
			description:
				'Zadbaj o bezpieczeństwo dzięki intuicyjnej kontroli rodzicielskiej.',
			alt: 'Ikona dwóch postaci – symbol kontroli rodzicielskiej',
		},
	];
	return (
		<section className='bg-background py-4 md:py-14 xl:py-20'>
			<Wrapper>
				<div className='max-w-4xl mx-auto text-center mb-10'>
					<h2 className='text-3xl font-bold mb-4 sm:text-4xl xl:mb-8 xl:text-[40px]'>
						Oglądaj tak, jak lubisz
					</h2>
					<p className='text-grey my-4 md:text-lg'>
						Najwspanialsze historie - kiedykolwiek i gdziekolwiek chcesz.
					</p>
				</div>
				<figure>
					<picture>
						<source
							media='(max-width:768px )'
							srcSet='/images/chooseDeviceSmall.webp'
						/>
						<source
							media='(max-width:1600px )'
							srcSet='/images/chooseDeviceLarge.webp'
						/>
						<img
							src='/images/szogunLarge.webp'
							alt='Filmy i seriale na wyłączność – tylko w Disney+'
						/>
					</picture>
				</figure>

				<div className='flex flex-col md:flex-row gap-6 mt-6'>
					{features.map((feature, index) => (
						<FeatureItem key={index} {...feature} />
					))}
				</div>
			</Wrapper>
		</section>
	);
}

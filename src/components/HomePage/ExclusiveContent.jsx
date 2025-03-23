import { Wrapper } from '../Wrapper';

export function ExclusiveContent() {
	return (
		<section className='flex flex-col bg-black relative px-4 py-10 md:px-0 md:py-0'>
			<figure className='order-2 md:order-2'>
				<picture>
					<source
						media='(max-width:768px )'
						srcset='/images/szogunSmall.webp'
					/>
					<source
						media='(max-width:1600px )'
						srcset='/images/szogunLarge.webp'
					/>
					<img
						src='/images/szogunLarge.webp'
						alt='Filmy i seriale na wyłączność – tylko w Disney+'
					/>
				</picture>
			</figure>

			<div className='flex flex-col justify-center items-center text-center order-1 text-white mb-20 md:items-start md:justify-start md:text-left md:absolute md:top-4 md:left-10 md:order-2 md:mb-0 md:w-[40%] lg:top-12 lg:left-16 xl:top-24 xl:left-24 2xl:top-48'>
				<h2 className='text-4xl font-bold xl:text-5xl'>Tylko w Disney+</h2>
				<p className='text-grey my-4 xl:my-10 xl:text-lg'>
					Seriale i produkcje oryginalne dostępne wyłącznie w Disney+
				</p>
				<p className='text-xs text-grey mt-1'>
					© 2023 TAS Rights Management LLC
				</p>
			</div>
		</section>
	);
}

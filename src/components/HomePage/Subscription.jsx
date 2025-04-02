import { Wrapper } from '../Wrapper';

export function Subscription() {
	const planData = [
		{
			label: '12 miesięcy w cenie 10**',
			standard: '299,90 zł/rok',
			premium: '499,90 zł/rok',
		},
		{
			label: 'Jakość wideo do',
			standard: '1080p Full HD',
			premium: '4K UHD i HDR',
		},
		{ label: 'Jednoczesne oglądanie', standard: '4', premium: '2' },
		{ label: 'Pobieranie', standard: '✔', premium: '✔' },
		{ label: 'Obsługa Dolby Atmos', standard: '✔', premium: '—' },
		{ label: 'Filmy i seriale bez reklam**', standard: '✔', premium: '✔' },
	];

	return (
		<section className='bg-background py-4 md:py-14 xl:py-20'>
			<Wrapper>
				<div className='max-w-4xl mx-auto text-center mb-10'>
					<h2 className='text-3xl font-bold mb-2 sm:text-4xl xl:mb-16 xl:text-[40px]'>Wybierz plan</h2>
				</div>

				<div className='md:hidden flex flex-col w-full' role='table'>
					<div className='flex gap-2 border-b border-grey' role='columnheader'>
						<div className='w-1/2 py-3 px-1 text-black bg-gray-500/30 flex flex-col items-center justify-center '>
							<button className='bg-main px-4 py-3  rounded w-full max-w-3xs text-center tracking-widest cursor-pointer hover:bg-cyan-500 transition-colors duration-300'>
								PREMIUM
							</button>
							<p className='text-white text-center text-sm mt-4'>
								49,99zł/miesiąc
							</p>
						</div>
						<div className=' w-1/2 py-3 px-1 text-white flex flex-col items-center justify-center '>
							<button className='bg-secondary px-4 py-3  rounded w-full max-w-3xs text-center tracking-widest cursor-pointer hover:bg-cyan-800 transition-colors duration-300'>
								STANDARD
							</button>
							<p className='text-grey text-center text-sm mt-4'>
								29,99zł/miesiąc
							</p>
						</div>
					</div>
					<div role='rowgroup'>
						{planData.map((feature, index) => (
							<div
								className='flex flex-col border-b border-grey/40'
								role='row'
								key={index}
							>
								<div
									className='py-4 font-bold text-center text-grey'
									role='cell'
								>
									{feature.label}
								</div>
								<div className='flex'>
									<div
										className='w-1/2 pt-2 pb-4 text-center font-bold '
										role='cell'
									>
										{feature.premium}
									</div>
									<div className='w-1/2 pt-2 pb-4  text-center' role='cell'>
										{feature.standard}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className='hidden md:flex flex-col w-full max-w-4xl mx-auto' role='table'>
					<div className='flex' role='columnheader'>
						<div className='w-1/2 p-4 ' role='cell'></div>
						<div className='w-1/4 p-4 text-black text-center bg-gray-500/20 '>
							<button className='bg-main px-4 py-3  rounded w-full max-w-3xs text-center tracking-widest cursor-pointer hover:bg-cyan-500 transition-colors duration-300'>
								PREMIUM
							</button>
							<p className='text-white text-center text-sm mt-4'>
								49,99zł/miesiąc
							</p>
						</div>
						<div className='w-1/4 p-4 text-white text-center'>
							<button className='bg-secondary px-4 py-3  rounded w-full max-w-3xs text-center tracking-widest cursor-pointer hover:bg-cyan-800 transition-colors duration-300'>
								STANDARD
							</button>
							<p className='text-grey text-center text-sm mt-4'>
								29,99zł/miesiąc
							</p>
						</div>
					</div>
					<div role='rowgroup'>
						{planData.map((feature, index) => (
							<div className='flex border-t ' role='row' key={index}>
								<div className='w-1/2 py-9 text-grey' role='cell'>
									{feature.label}
								</div>
								<div
									className='w-1/4 py-9 text-center bg-gray-500/20 '
									role='cell'
								>
									{feature.premium}
								</div>
								<div className='w-1/4 py-9 text-center' role='cell'>
									{feature.standard}
								</div>
							</div>
						))}
					</div>
				</div>
			</Wrapper>
		</section>
	);
}

export function FooterMenu({ title, links, onToggle, isOpen }) {
	return (
		<div className='mb-4 md:mb-0 md:w-40'>
			{/* ZMIANA: Nagłówek jest teraz oddzielnym elementem, który nie jest częścią animowanego kontenera */}
			<div
				className='flex justify-between items-center cursor-pointer md:cursor-default'
				onClick={onToggle}
			>
				<h3 className='text-sm uppercase font-semibold tracking-wide'>
					{title}
				</h3>
				<span className='text-white md:hidden'>
					{isOpen ? (
						<svg
							className='w-5 h-5' // ZMIANA: Zmniejszono rozmiar ikony z w-10 h-10 na w-5 h-5, aby lepiej pasowała
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 48 48'
							fill='white' // ZMIANA: Zmieniono kolor z grey na white, aby pasował do stylu
						>
							<rect width='48' height='48' fill='none'></rect>
							<path d='M36.63,18.37a1.37,1.37,0,0,1,2.15.37,1.7,1.7,0,0,1-.3,2.06L25.4,32.64a1.37,1.37,0,0,1-1.85,0l-13-11.84a1.71,1.71,0,0,1-.29-2.06,1.37,1.37,0,0,1,2.15-.37l12.11,11ZM24.25,31.42a.38.38,0,0,1,.46,0l-.23-.21ZM11.71,19.55s0,.06,0,0Zm25.61,0h0Z'></path>
						</svg>
					) : (
						<svg
							className='w-5 h-5'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 48 48'
							fill='white'
						>
							<rect width='48' height='48' fill='none'></rect>
							<path d='M18.37,11.37a1.37,1.37,0,0,1,2.06-.3l11.84,12.11a1.37,1.37,0,0,1,0,1.85l-11.84,13a1.71,1.71,0,0,1-2.06.29,1.37,1.37,0,0,1-.37-2.15L31.42,24.25a.38.38,0,0,1,0-.46L18.37,12.71A1.37,1.37,0,0,1,18.37,11.37Z'></path>
						</svg>
					)}
				</span>
			</div>
			{/* ZMIANA: Animacja max-height jest stosowana tylko do listy, co zapobiega przesuwaniu nagłówka */}
			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out md:transition-none ${
					isOpen ? 'max-h-96' : 'max-h-0'
				} md:max-h-none`}
			>
				<ul className='mt-3 space-y-3'>
					{links.map((link, index) => (
						<li key={index}>
							<a
								href='#'
								className='text-gray-400 text-sm hover:text-white transition-colors'
							>
								{link}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

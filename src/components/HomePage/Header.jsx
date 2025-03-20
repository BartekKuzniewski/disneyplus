import { Link } from 'react-router-dom';
import { Wrapper } from '../Wrapper';

export function Header() {
	return (
		<header className="relative h-[90dvh] xl:h-[100dvh]  bg-[url('/images/homePageBgSmall.webp')] bg-cover lg:bg-[url('/images/homePageBg1024.webp')] 2xl:bg-[url('/images/homePageBg1600.webp')]">
			<div className='absolute inset-0 bg-black opacity-60 '></div>

			<nav className='relative z-10 flex flex-row justify-between items-center px-4 py-4 md:px-6 2xl:px-10'>
				<Link to='/'>
					<img
						src='/images/disneyLogo.png'
						alt='Logo Disney+'
						className='h-13 md:h-16'
					/>
				</Link>
				<Link
					to='/login'
					className='text-white tracking-wide bg-black border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-400 ease-in-out md:text-lg md:px-5 md:py-3'
				>
					Zaloguj się
				</Link>
			</nav>
			<Wrapper>
				<div className='relative text-center z-10 max-w-2xl mx-auto mt-24 xl:mt-36'>
					<div className='md:flex md:justify-center md:items-center gap-6 '>
						<p className='text-white text-7xl font-bold md:text-8xl'>7,99 zł</p>
						<div>
							<p className='text-white text-2xl font-light my-1 md:text-3xl md:font-normal'>
								miesięcznie przez
							</p>
							<p className='text-main text-5xl font-bold'>4 miesiące</p>
						</div>
					</div>
					<p className='text-white text-2xl font-bold my-6 uppercase'>
						promocja kończy się 30 maja
					</p>
					<Link
						to='/register'
						className='block bg-main text-black hover:bg-cyan-500 text-md px-6 py-3 mx-auto max-w-lg rounded-sm uppercase tracking-widest transition-colors duration-300'
					>
						Zarejestruj się teraz
					</Link>
					<p className='text-grey my-4'>
						Oferta dotyczy miesięcznego planu Standard.*
					</p>
					<a href='' className='text-white underline'>
						Wyświetl wszystkie plany
					</a>
					<p className='text-grey text-xs leading-5 mt-4'>
						*Oferta kończy się 30/03/25. Tylko nowi i spełniający warunki
						powracający subskrybenci. Muszą mieć ukończone 18 lat. Poprzednia
						miesięczna cena planu Standard: 29,99 zł. Po 4 miesiącach następuje
						automatyczne odnowienie w obowiązującej wówczas miesięcznej cenie
						planu Standard wynoszącej 29,99 zł, o ile nie anulujesz wcześniej.
					</p>
				</div>

				<a
					href='#next-section'
					className='absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce'
				>
					<svg
						className='w-10 h-10 '
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 48 48'
						fill='grey'
					>
						<rect width='48' height='48' fill='none'></rect>
						<path d='M36.63,18.37a1.37,1.37,0,0,1,2.15.37,1.7,1.7,0,0,1-.3,2.06L25.4,32.64a1.37,1.37,0,0,1-1.85,0l-13-11.84a1.71,1.71,0,0,1-.29-2.06,1.37,1.37,0,0,1,2.15-.37l12.11,11ZM24.25,31.42a.38.38,0,0,1,.46,0l-.23-.21ZM11.71,19.55s0,.06,0,0Zm25.61,0h0Z'></path>
					</svg>
				</a>
			</Wrapper>
		</header>
	);
}

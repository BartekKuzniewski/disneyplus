import { Link } from 'react-router-dom';
import bgSmall from '../../assets/images/homePageBgSmall.webp';
import logo from '../../assets/images/disneyLogo.png';

export function Header() {
	return (
		<header
			className='relative h-[90dvh] bg-cover'
			style={{ backgroundImage: `url(${bgSmall})` }}
		>
			<div className='absolute inset-0 bg-black opacity-50 '></div>

			<nav className='relative z-10 flex flex-row justify-between items-center px-4 py-2'>
				<Link>
					<img src={logo} alt='Logo Disney+' className='h-12' />
				</Link>
				<Link className='text-white bg-black border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-400 ease-in-out md:text-base'>
					Zaloguj się
				</Link>
			</nav>
		</header>
	);
}

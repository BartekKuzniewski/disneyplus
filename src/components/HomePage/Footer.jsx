import { useState } from 'react';
import { FooterMenu } from '../FooterMenu';
import { Wrapper } from '../Wrapper';
import {
	FaSquareXTwitter,
	FaSquareFacebook,
	FaSquareInstagram,
	FaSquareYoutube,
} from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export function Footer() {
	const [openSection, setOpenSection] = useState([]);
	const footerData = [
		{
			title: 'Dowiedz się więcej',
			links: [
				'Umowa subskrypcji',
				'Polityka prywatności',
				'Zasady ochrony prywatności w UE',
				'Polityka dotycząca plików cookie',
				'Reklamy dostosowane do zainteresowań',
				'Zarządzaj preferencjami prywatności',
			],
		},
		{
			title: 'Pomoc',
			links: ['Centrum pomocy', 'Obsługiwane urządzenia', 'O nas'],
		},
		{
			title: 'Originals',
			links: [
				'To zawsze Agatha',
				'Gwiezdne wojny: Żatoga rozbitków',
				'Gwiezdne wojny: Akolita',
				'X-Men ’97',
				'Ahsoka',
				'The Mandalorian',
				'Percy Jackson i bogowie olimpijscy',
			],
		},
		{
			title: 'Filmy i seriale',
			links: [
				'Chirurdzy',
				'W głowie się nie mieści',
				'Avatar: Istota wody',
				'Zbrodnie po sąsiedzku',
				'Zakamarki',
				'Współczesna rodzina',
				'The Bear',
				'Simpsonowie',
			],
		},
		{
			title: 'Kolekcje',
			links: [
				'Grey’s Anatomy',
				'Akcja i przygoda',
				'Serie do obejrzenia ciagiem',
				'Komedia',
				'Dokumentalny',
				'Dramat',
				'Familijne',
				'Science fiction',
			],
		},
	];

	const handleToggle = (index) => {
		if (openSection.includes(index)) {
			// Jeśli sekcja jest już rozwinięta, usuń jej indeks z tablicy (zwijanie)
			setOpenSection(openSection.filter((i) => i !== index));
		} else {
			// Jeśli sekcja nie jest rozwinięta, dodaj jej indeks do tablicy (rozwijanie)
			setOpenSection([...openSection, index]);
		}
	};

	return (
		<footer className='bg-footer py-4 md:py-14 '>
			<Wrapper>
				<div className='flex flex-col justify-center pt-4 px-10 md:flex-row md:gap-10 max-w-[360px] mx-auto md:px-2 md:max-w-full'>
					{footerData.map((data, index) => (
						<FooterMenu
							key={index}
							title={data.title}
							links={data.links}
							isOpen={openSection.includes(index)}
							onToggle={() => handleToggle(index)}
						/>
					))}
				</div>
				<div className='flex flex-col justify-center px-10 md:flex-row max-w-[360px] md:max-w-full mx-auto md:px-2 md:mt-6 md:justify-between'>
					<ul className='flex flex-col space-y-6 py-6 border-t-[0.01px] border-grey/20 cursor-pointer md:border-none md:flex-row md:items-center md:justify-center md:w-full md:gap-5 md:space-y-0'>
						<li>Marvel</li>
						<li>Star Wars</li>
						<li>National Geographic</li>
						<li>Pixar</li>
						<li>Disney</li>
						<li>Star</li>
					</ul>
					<ul className='flex items-center justify-center space-x-1 w-full md:justify-evenly'>
						<li>
							<a href='https://x.com/disneyplus' target='_blank'>
								<FaSquareXTwitter size={24} />
							</a>
						</li>
						<li>
							<a href='https://www.facebook.com/DisneyPlusPL' target='_blank'>
								<FaSquareFacebook size={24} />
							</a>
						</li>
						<li>
							<a href='https://www.instagram.com/disneypluspl/' target='_blank'>
								<FaSquareInstagram size={24} />
							</a>
						</li>
						<li>
							<a href='https://www.tiktok.com/@disneyplus' target='_blank'>
								<AiFillTikTok size={24} />
							</a>
						</li>
						<li>
							<a
								href='https://www.youtube.com/@disneypluseu5125'
								target='_blank'
							>
								<FaSquareYoutube size={24} />
							</a>
						</li>
					</ul>
				</div>
				<Link to='/' className='flex items-center justify-center my-6 '>
					<img
						src='/images/disneyLogo.png'
						alt='Logo Disney+'
						className='h-18 md:h-20'
					/>
				</Link>
				<p className='text-[10px] text-grey text-center my-4'>
					© 2025 Disney i podmioty powiązane. Wszelkie prawa zastrzeżone.
				</p>
			</Wrapper>
		</footer>
	);
}

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
		<footer className='bg-footer py-4 md:py-14 xl:py-20'>
			<Wrapper>
				<div className='flex flex-col justify-center pt-4 px-10 md:flex-row md:gap-10 '>
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
				<div className='flex flex-col justify-center px-10 md:flex-row md:gap-10'>
					<ul className='flex flex-col space-y-6 py-6 border-t-[0.01px] border-grey/20'>
						<li>Marvel</li>
						<li>Star Wars</li>
						<li>National Geographic</li>
						<li>Pixar</li>
						<li>Disney</li>
						<li>Star</li>
					</ul>
					<ul className='flex items-center justify-center space-x-4'>
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
			</Wrapper>
		</footer>
	);
}

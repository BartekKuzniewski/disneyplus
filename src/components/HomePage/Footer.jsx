import { useState } from 'react';
import { FooterMenu } from '../FooterMenu';
import { Wrapper } from '../Wrapper';

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
				'Loki',
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
				<div className='flex flex-col justify-center md:flex-row md:gap-10 mb-10 '>
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
			</Wrapper>
		</footer>
	);
}

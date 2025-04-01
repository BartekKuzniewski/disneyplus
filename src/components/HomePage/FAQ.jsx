import { useState } from 'react';
import { Wrapper } from '../Wrapper';

export function FAQ() {
	const faqData = [
		{
			question: 'Jakie urządzenia są kompatybilne?',
			answer:
				'Disney+ jest kompatybilny z urządzeniami mobilnymi, przeglądarkami internetowymi, konsolami do gier, dekoderami oraz smart TV. Kliknij tutaj, żeby zobaczyć pełną listę.',
		},
		{
			question:
				'Czy z subskrypcją Disney+ wiążą się jakieś dodatkowe zobowiązania?',
			answer:
				'Twoja subskrypcja Usługi Disney+ obejmuje zapisanie się do cyklicznego planu płatności, subskrypcję można anulować w każdej chwili. Możesz to zrobić w 5 prostych krokach:\n1. Wejdź na www.disneyplus.com i zaloguj się.\n2. Wybierz swój profil.\n3. Wybierz Konto.\n4. Wybierz Anuluj subskrypcję.\n5. Wybierz Dokończ anulowanie, żeby potwierdzić.',
		},
		{
			question: 'Co to jest Disney+?',
			answer:
				'Disney+ to usługa streamingowa, będąca domem dla filmów i programów Disneya, Pixara, Marvela, Gwiezdnych Wojen, National Geographic oraz wielu innych.',
		},
		{
			question: 'Co mogę zobaczyć w Disney+?',
			answer:
				'W Disney+ możesz wybierać ze stale rozrastającej się kolekcji:\n- Nowe seriale oryginalne i filmy dostępne wyłącznie w Disney+\n- Ponadczasowe klasyki i najnowsze hity od Walt Disney Animation Studios\n- Cała saga Gwiezdne Wojny i Filmowe Uniwersum Marvela\n- Dokumenty od National Geographic, seriale bez scenariusza i wiele więcej.',
		},
		{
			question: 'Ile kosztuje Disney+?',
			answer:
				'Do wyboru masz dwa plany Disney+:\n- Premium (49,99 zł/miesiąc lub 499,90 zł/rok) z wideo w jakości maks. 4K UHD i HDR\n- Standard (29,99 zł/miesiąc lub 299,90 zł/rok) z wideo w jakości maks. 1080p (Full HD)',
		},
	];
	const [activeItems, setActiveItems] = useState([]);

	const toggleAccordion = (index) => {
		if (activeItems.includes(index)) {
			// Jeśli element jest aktywny, usuń go z listy
			setActiveItems(activeItems.filter((item) => item !== index));
		} else {
			// Jeśli element nie jest aktywny, dodaj go do listy
			setActiveItems([...activeItems, index]);
		}
	};

	return (
		<section className='bg-background py-4 md:py-14 xl:py-20'>
			<Wrapper>
				<h2 className='text-3xl font-bold mb-2 sm:text-4xl xl:mb-16 xl:text-[40px] text-center'>
					Najczęściej zadawane pytania
				</h2>

				<div className='mt-10'>
					{faqData.map((item, index) => (
						<div key={index} className='mb-4 shadow-sm'>
							<button
								className='w-full text-left px-4 py-3 bg-[#13151d] flex justify-between items-center'
								onClick={() => toggleAccordion(index)}
							>
								<span className='text-white font-bold'>{item.question}</span>
								<span className='text-white font-bold text-3xl'>{activeItems.includes(index) ? '-' : '+'}</span>
							</button>
							<div
								className={`px-4 py-2 bg-[#13151d]  ${
									activeItems.includes(index) ? 'block' : 'hidden'
								}`}
							>
								{item.answer.split('\n').map((line, idx) => (
									<p key={idx} className='mb-2 text-grey text-sm'>
										{line}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</Wrapper>
		</section>
	);
}

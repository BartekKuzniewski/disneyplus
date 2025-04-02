import { DeviceItem } from '../DeviceItem';
import { Wrapper } from '../Wrapper';

const availableDevices = [
	{
		category: 'TV',
		icon: '/images/tv.webp', // Możesz użyć odpowiedniego komponentu ikony
		alt: 'Ikona telewizora',
		devices: [
			'Amazon Fire TV',
			'Android TV',
			'Apple TV',
			'Chromecast',
			'Hisense',
			'LG',
			'Panasonic',
			'Samsung',
		],
	},
	{
		category: 'Komputer',
		icon: '/images/desktop.webp', // Możesz zastąpić odpowiednim symbolem lub komponentem
		alt: 'Ikona laptopa',
		devices: ['Chrome OS', 'MacOS', 'Windows PC'],
	},
	{
		category: 'Telefony komórkowe i tablety',
		icon: '/images/mobile.webp', // Możesz użyć odpowiedniej ikony
		alt: 'Ikona smartfona',
		devices: [
			'Tablety Amazon Fire',
			'Telefony i tablety Android',
			'iPhone oraz iPad',
		],
	},
	{
		category: 'Konsole',
		icon: '/images/consolePad.webp', // Możesz zastąpić ikoną kontrolera
		alt: 'Ikona gamepada',
		devices: ['PS4', 'PS5', 'Xbox One', 'Xbox Series X', 'Xbox Series S'],
	},
];

export function SupportedDevices() {
	return (
		<section className='bg-background py-4 md:py-14 xl:py-20'>
			<Wrapper>
				<h2 className='text-3xl text-center font-bold mb-4 sm:text-4xl xl:mb-16 xl:text-[40px]'>
					Dostępny na Twoich ulubionych urządzeniach
				</h2>

                <ul className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-6'>
					{availableDevices.map((device, index) => (
						<DeviceItem
							key={index}
							category={device.category}
							icon={device.icon}
							alt={device.alt}
							devices={device.devices}
						/>
					))}
				</ul>
			</Wrapper>
		</section>
	);
}

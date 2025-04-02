export function DeviceItem({ icon, alt, category, devices }) {
	return (
		<li className='text-center'>
			<img src={icon} alt={alt} className='w-[150px] mx-auto lg:w-[300px]' />
			<h3 className='text-xl text-white font-bold my-4 lg:text-2xl'>{category}</h3>
			<ul className='text-md text-grey my-4'>
				{devices.map((device, index) => (
					<li key={index}>{device}</li>
				))}
			</ul>
		</li>
	);
}

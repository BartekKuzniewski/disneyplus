export function FeatureItem({ imgSrc, title, description, alt }) {
	return (
		<div className='flex flex-col text-center md:w-1/3 lg:px-6'>
			<img src={imgSrc} alt={alt} className='w-[80px] mx-auto' />
			<h3 className='text-2xl text-white font-bold my-4'>{title}</h3>
			<p className='text-xl text-grey my-4'>{description}</p>
		</div>
	);
}

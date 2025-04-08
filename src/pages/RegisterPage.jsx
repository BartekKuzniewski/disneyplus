import { Link } from "react-router-dom";

export function RegisterPage() {
	return (
		<div className='bg-radial-[at_20%_95%] from-[#056877] to-[#051828] to-96% h-screen flex flex-col justify-center items-center text-black p-4'>
			<Link to='/' className='flex items-center justify-center mb-10 '>
				<img
					src='/images/disneyLogo.png'
					alt='Logo Disney+'
					className='h-18 md:h-24'
				/>
			</Link>
		</div>
	);
}

import React from 'react';
import Header from '../../components/Header';
import { getProviders, signIn } from 'next-auth/react';

const signin = ({ providers }) => {
	return (
		<div>
			<Header />
			<div className='mt-40'>
				{Object.values(providers).map(provider => {
					return (
						<div className='flex flex-col items-center' href={provider.signInUrl} key={provider.name}>
							<img
								className='h-24 object-cover'
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png'
								alt='Google logo'
							/>
							<p className='text-sm italic my-10 text-center'>
								This website is created for learning purposes
							</p>
							<button className='bg-red-400 text-white rounded-lg p-3 hover:bg-red-500' onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
								Sign in with {provider.name}
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export async function getServerSideProps(context) {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}

export default signin;

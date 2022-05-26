import { useRef } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

const Home = () => {
	const router = useRouter();

	const searchInputRef = useRef(null);
	const search = e => {
		e.preventDefault();
		const term = searchInputRef.current.value;
		if (!term.trim()) return;
		router.push(`/search?term=${term.trim()}`);
	};
	return (
		<div>
			<Head>
				<title>Google Clone</title>
				<meta name='description' content='Clone of search engine Google' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<form className='flex flex-col items-center mt-40'>
				<Image
					width='300'
					objectFit='cover'
					height='100'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png'
				/>
				<div className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl'>
					<SearchIcon className='h-5 text-gray-500 mr-3' />
					<input
						ref={searchInputRef}
						type='text'
						className='flex-grow focus:outline-none'
					/>
					<MicrophoneIcon className='h-5 text-gray-500' />
				</div>
				<div className='flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center'>
					<button onClick={search} className='btn'>
						Google Search
					</button>
					<button className='btn'>I'm Feeling Lucky</button>
				</div>
			</form>

			<Footer />
		</div>
	);
};

export default Home;

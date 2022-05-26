import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import User from './User';

const SearchHeader = () => {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const search = e => {
		e.preventDefault();
		const term = searchInputRef.current.value;
		if (!term.trim()) return;
		router.push(`/search?term=${term.trim()}`);
	}

	return (
		<header className='sticky top-0 bg-white'>
			<div className='flex w-full p-6 items-center'>
				<Image
					onClick={() => router.push(`/`)}
					className='cursor-pointer'
					width='120'
					objectFit='contain'
					height='40'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png'
				/>
				<form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center'>
					<input
						className='w-full focus:outline-none'
						type='text'
						defaultValue={router.query.term}
						ref={searchInputRef}
					/>
					<XIcon
						onClick={() => (searchInputRef.current.value = '')}
						className='h-7 text-gray-500 cursor-pointer sm:mr-3'
					/>
					<MicrophoneIcon className='h-6 text-blue-500 hidden sm:inline-flex cursor-pointer pl-4 border-l-2 border-gray-300 mr-3' />
					<SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex cursor-pointer sm:mr-3' />
					<button onClick={search} hidden type='submit'></button>
				</form>
				<User className='ml-auto whitespace-nowrap' />
			</div>
		</header>
	);
};

export default SearchHeader;

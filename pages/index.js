import Head from 'next/head';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Google Clone</title>
				<meta name='description' content='Clone of search engine Google' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<Body />

			<Footer />
		</div>
	);
}

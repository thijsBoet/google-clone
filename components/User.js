import { useSession, signIn, signOut } from 'next-auth/react';

const User = () => {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				<img
					className='cursor-pointer'
					onClick={signOut}
					src={session.user.image}
					alt='Avatar Image'
				/>
			</>
		);
	}
	return (
		<>
			<button onClick={signIn}>Sign In</button>
		</>
	);
};

export default User;

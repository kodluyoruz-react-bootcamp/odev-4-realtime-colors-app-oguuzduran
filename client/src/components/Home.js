import { useEffect } from 'react';
import ChangeColor from './ChangeColor';
import { initSocket, disconnectSocket } from '../socketService';
function Home() {
	useEffect(() => {
		initSocket();
		return () => disconnectSocket();
	}, []);
	return (
		<div>
			<h1>Select Color</h1>
			<ChangeColor />
		</div>
	);
}

export default Home;

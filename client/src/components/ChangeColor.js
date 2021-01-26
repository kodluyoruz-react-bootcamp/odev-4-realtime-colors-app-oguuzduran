import { useState, useContext, useEffect } from 'react';
import ColorContext from '../contexts/ColorContext';
import { sendColor } from '../socketService';

function ChangeColor() {
	const [color, setColor] = useState('#ddd');
	const { setSelectColor } = useContext(ColorContext);

	const handleSubmit = (e) => {
		setColor(e.target.value);
		setSelectColor(color);
	};

	useEffect(() => {
		sendColor(color);
	}, [color]);

	return (
		<div style={{ padding: '10px' }}>
			<input value={color} type="color" onChange={(e) => handleSubmit(e)} />
		</div>
	);
}

export default ChangeColor;

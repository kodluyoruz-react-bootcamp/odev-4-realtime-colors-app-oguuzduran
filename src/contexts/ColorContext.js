import { createContext, useState, useEffect } from 'react';

const ColorContext = createContext(null);

export const ColorProvider = ({ children }) => {
	const [selectColor, setSelectColor] = useState('');

	useEffect(() => {
		document.body.style.backgroundColor = `${selectColor}`;
	}, [selectColor]);

	const values = {
		selectColor,
		setSelectColor,
	};

	return <ColorContext.Provider value={values}>{children}</ColorContext.Provider>;
};

export default ColorContext;

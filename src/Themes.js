const typography = {
	h1: '30px',
	h2: '22px',
	h3: '18px',
	p: '16px',
	small: '14px',
};

export const globalStyles = {
	primary: '#FF891C',
	accent: '#1BC8F6',
	alert: '#B94E2C',
};

export const darkTheme = {
	...typography,
	...globalStyles,
	background: '#32353F',
	text: '#fff',
	surface: '#3C3F49',
};

export const lightTheme = {
	...typography,
	...globalStyles,
	background: '#FDF8F5',
	text: '#000',
	surface: '#FFFFFF',
};

export const typography = {
	h1: 30,
	h2: 22,
	h3: 18,
	p: 16,
	small: 14,
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
	primary: '#FF891C',
	accent: '#1BC8F6',
	surface: '#3C3F49',
};

export const lightTheme = {
	...typography,
	...globalStyles,
	background: '#FDF8F5',
	text: '#000',
	primary: '#FF891C',
	accent: '#1BC8F6',
	surface: '#FFFFFF',
};

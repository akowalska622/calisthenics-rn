import { Appearance } from 'react-native';
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		theme: Appearance.getColorScheme(),
	},
	reducers: {
		toggleTheme: state => {
			state.theme = state.theme === 'dark' ? 'light' : 'dark';
		},
	},
});

export const toggleTheme = themeSlice.actions.toggleTheme;

export default themeSlice.reducer;

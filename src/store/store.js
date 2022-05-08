import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '@/store/reducers/theme';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
	},
});

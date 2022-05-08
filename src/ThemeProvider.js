import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './Themes';
import { THEME_SELECTORS } from '@/store/selectors/themeSelectors';

const CustomThemeProvider = ({ children }) => {
	const theme = useSelector(THEME_SELECTORS.getTheme);

	return (
		<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
			{children}
		</ThemeProvider>
	);
};

export default CustomThemeProvider;

import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { THEME_SELECTORS } from '@/store/selectors/themeSelectors';

const EnhancedStatusBar = () => {
	const theme = useSelector(THEME_SELECTORS.getTheme);

	return <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />;
};

export default EnhancedStatusBar;

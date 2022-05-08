import { Provider } from 'react-redux';
import { store } from '@/store/store';
import ThemeProvider from '@/ThemeProvider';
import StatusBar from '@/StatusBar';
import { AppNavigation } from '@/navigation/AppNavigation';

export default function App() {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<StatusBar />
				<AppNavigation />
			</ThemeProvider>
		</Provider>
	);
}

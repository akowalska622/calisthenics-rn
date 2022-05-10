import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store/store';
import ThemeProvider from '@/ThemeProvider';
import StatusBar from '@/StatusBar';
import { AppNavigation } from '@/navigation/AppNavigation';

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider>
					<StatusBar />
					<AppNavigation />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}

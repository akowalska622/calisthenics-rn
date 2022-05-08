import { Provider } from 'react-redux';
import styled from 'styled-components/native';
import { Nested } from '@/Nested';
import { store } from '@/store/store';
import ThemeProvider from '@/ThemeProvider';
import StatusBar from '@/StatusBar';

export default function App() {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<StyledView>
					<Nested />
					<StatusBar />
				</StyledView>
			</ThemeProvider>
		</Provider>
	);
}

const StyledView = styled.View`
	background-color: ${props => props.theme.background};
	flex: 1;
	align-items: center;
	justify-content: center;
`;

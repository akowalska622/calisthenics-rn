import { useDispatch } from 'react-redux';
import { Button } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styled from 'styled-components/native';
import { toggleTheme } from '@/store/reducers/theme';

export const Nested = () => {
	const dispatch = useDispatch();

	return (
		<StyledView>
			<StyledText>I am a nested component</StyledText>
			<Button title='change mode' onPress={() => dispatch(toggleTheme())} />
		</StyledView>
	);
};

const StyledView = styled.View`
	width: 400px;
	padding: 20px;
	height: 200px;
	background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
	color: ${({ theme }) => theme.text};
	font-size: ${({ theme }) => theme.textSize};
`;

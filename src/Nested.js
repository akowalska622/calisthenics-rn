import { useDispatch } from 'react-redux';
import { Button } from 'react-native';
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
	height: 200px;
	background-color: ${({ theme }) => theme.primary};
`;

const StyledText = styled.Text`
	color: white;
	font-size: ${({ theme }) => theme.textSize};
`;

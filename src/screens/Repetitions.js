import { Button } from 'react-native';

import { StyledView } from '@/components/atoms/StyledView';
import { StyledText } from '@/components/atoms/StyledText';

export const Repetitions = ({ navigation }) => {
	return (
		<StyledView>
			<StyledText>hello from the repetitions screen</StyledText>
			<Button
				title='Go back to start'
				onPress={() => navigation.navigate('HomeScreen')}
			/>
		</StyledView>
	);
};

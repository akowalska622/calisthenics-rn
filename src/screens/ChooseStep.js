import { Button } from 'react-native';

import { StyledView } from '@/components/atoms/StyledView';
import { StyledText } from '@/components/atoms/StyledText';

export const ChooseStep = ({ navigation }) => {
	return (
		<StyledView>
			<StyledText>hello from the step screen</StyledText>
			<Button
				title='Chosen step'
				onPress={() => navigation.navigate('Repetitions')}
			/>
		</StyledView>
	);
};

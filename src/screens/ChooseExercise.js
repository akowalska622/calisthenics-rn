import { Button } from 'react-native';

import { StyledView } from '@/components/atoms/StyledView';
import { StyledText } from '@/components/atoms/StyledText';

export const ChooseExercise = ({ navigation }) => {
	return (
		<StyledView>
			<StyledText>hello from the exercise screen</StyledText>
			<Button
				title='Chosen exercise'
				onPress={() => navigation.navigate('ChooseStep')}
			/>
		</StyledView>
	);
};

import { Button } from 'react-native';
import { useLayoutEffect } from 'react';

import { StyledView } from '@/components/atoms/StyledView';
import { StyledText } from '@/components/atoms/StyledText';
import { STEPS } from '@/utils/ExercisesData';

export const Repetitions = ({ navigation, route }) => {
	const { exerciseName, stepId } = route.params;

	const stepName = STEPS[exerciseName].find(step => step.id === stepId).name;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: stepName,
		});
	});

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

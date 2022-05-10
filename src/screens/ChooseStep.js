import { useLayoutEffect } from 'react';
import { Button } from 'react-native';

import { StyledView } from '@/components/atoms/StyledView';
import { StyledText } from '@/components/atoms/StyledText';
import { Header } from '@/components/atoms/Header';
import { EXERCISES } from '@/utils/ExercisesData';

export const ChooseStep = ({ navigation, route }) => {
	const { exerciseId } = route.params;
	const exerciseName = EXERCISES.find(
		exercise => exercise.id === exerciseId
	).name;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: exerciseName,
		});
	});

	return (
		<StyledView>
			<Header size='h2'>Choose your step</Header>

			<StyledText>hello from the step screen</StyledText>
			<Button
				title='Chosen step'
				onPress={() => navigation.navigate('Repetitions')}
			/>
		</StyledView>
	);
};

import { useLayoutEffect } from 'react';
import styled from 'styled-components';

import { StyledView } from '@/components/atoms/StyledView';
import { PressableCard } from '@/components/atoms/PressableCard';
import { Header } from '@/components/atoms/Header';
import { EXERCISES, STEPS } from '@/utils/ExercisesData';
import { globalStyles } from '@/Themes';

export const ChooseStep = ({ navigation, route }) => {
	const { exerciseId } = route.params;

	const exerciseName = EXERCISES.find(
		exercise => exercise.id === exerciseId
	).name;

	const steps = STEPS[exerciseName];

	useLayoutEffect(() => {
		navigation.setOptions({
			title: exerciseName,
		});
	});

	const handleChooseStep = id => {
		navigation.navigate('Repetitions', {
			stepId: id,
			exerciseName,
		});
	};

	return (
		<StyledView>
			<Header size='h2'>Choose your step</Header>
			<List>
				{steps.map((step, idx) => (
					<PressableCard
						key={step.id}
						hasIcon
						iconProps={{
							name: 'chevron-forward-circle-outline',
							size: 15,
							color: globalStyles.primary,
						}}
						hasProgress
						onPress={handleChooseStep.bind(null, step.id)}
					>
						{idx + 1}. {step.name}
					</PressableCard>
				))}
			</List>
		</StyledView>
	);
};

const List = styled.ScrollView`
	flex: 1;
`;

import styled from 'styled-components';

import { StyledView } from '@/components/atoms/StyledView';
import { PressableCard } from '@/components/atoms/PressableCard';
import { Header } from '@/components/atoms/Header';
import { EXERCISES } from '@/utils/ExercisesData';
import { darkTheme } from '@/Themes';

export const ChooseExercise = ({ navigation }) => {
	const handleChooseExercise = id => {
		navigation.navigate('ChooseStep', {
			exerciseId: id,
		});
	};

	return (
		<StyledView>
			<Header size='h2'>Choose your exercise</Header>
			<List>
				{EXERCISES.map(exercise => (
					<PressableCard
						key={exercise.id}
						hasIcon
						iconProps={{
							name: 'chevron-forward-circle-outline',
							size: 15,
							color: darkTheme.primary,
						}}
						onPress={handleChooseExercise.bind(null, exercise.id)}
					>
						{exercise.name}
					</PressableCard>
				))}
			</List>
		</StyledView>
	);
};

const List = styled.ScrollView`
	flex: 1;
`;

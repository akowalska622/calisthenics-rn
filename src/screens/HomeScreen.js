import { useDispatch } from 'react-redux';
import { Button } from 'react-native';
import { toggleTheme } from '@/store/reducers/theme';
import { StyledView } from '@/components/atoms/StyledView';
import { Header } from '@/components/atoms/Header';

export const HomeScreen = ({ navigation }) => {
	return (
		<StyledView>
			<Header size='h1'>Welcome!</Header>
			<Header size='h2'>You've trained x days this week.</Header>
			<Button
				title='Start training'
				onPress={() => navigation.navigate('ChooseExercise')}
			/>
		</StyledView>
	);
};

import { useTheme } from 'styled-components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@/screens/HomeScreen';
import { ChooseExercise } from '@/screens/ChooseExercise';
import { ChooseStep } from '@/screens/ChooseStep';
import { Repetitions } from '@/screens/Repetitions';

export const StackNavigator = () => {
	const Stack = createNativeStackNavigator();
	const theme = useTheme();

	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: theme.surface,
				},
				headerTintColor: theme.text,
				headerTitleAlign: 'center',
			}}
		>
			<Stack.Screen
				name='HomeScreen'
				component={HomeScreen}
				options={{
					title: 'Calisthenics with Paul Wade',
				}}
			/>
			<Stack.Screen
				name='ChooseExercise'
				component={ChooseExercise}
				options={{
					title: 'Choose Exercise',
				}}
			/>
			<Stack.Screen
				name='ChooseStep'
				component={ChooseStep}
				options={{
					title: 'Choose Step',
				}}
			/>
			<Stack.Screen
				name='Repetitions'
				component={Repetitions}
				options={{
					title: 'Repetitions',
				}}
			/>
		</Stack.Navigator>
	);
};

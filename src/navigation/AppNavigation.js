import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';
import { Nested } from '@/Nested';

export const AppNavigation = () => {
	const theme = useTheme();
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: theme.surface,
					},
					headerTintColor: theme.text,
					contentStyle: { backgroundColor: theme.background },
				}}
			>
				<Stack.Screen
					name='HomeScreen'
					component={Nested}
					options={{
						title: 'Calisthenics with Paul Wade',
						headerTitleAlign: 'center',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

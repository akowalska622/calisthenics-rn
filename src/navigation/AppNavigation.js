import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigator } from '@/navigation/StackNavigator';
import { OptionsScreen } from '@/screens/OptionsScreen';

export const AppNavigation = () => {
	const Tab = createBottomTabNavigator();
	const theme = useTheme();

	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: theme.surface,
					},
					headerTintColor: theme.text,
					tabBarActiveTintColor: theme.primary,
					tabBarInactiveTintColor: theme.text,
					tabBarActiveBackgroundColor: theme.surface,
					tabBarInactiveBackgroundColor: theme.surface,
					headerShadowVisible: false,
					tabBarStyle: {
						borderTopWidth: 0,
						height: 70,
					},
					headerTitleAlign: 'center',
				}}
			>
				<Tab.Screen
					name='Home'
					component={StackNavigator}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name='home' color={color} size={size} />
						),
						headerShown: false,
					}}
				/>
				<Tab.Screen
					name='Options'
					component={OptionsScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name='cog-outline' color={color} size={size} />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

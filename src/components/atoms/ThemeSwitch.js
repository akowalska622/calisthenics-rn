import { useState } from 'react';
import { Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { THEME_SELECTORS } from '@/store/selectors/themeSelectors';
import { toggleTheme } from '@/store/reducers/theme';

export const ThemeSwitch = () => {
	const theme = useSelector(THEME_SELECTORS.getTheme);
	const dispatch = useDispatch();
	const isEnabled = theme === 'light';

	return (
		<Switch
			style={{
				backgroundColor: 'transparent',
				padding: 10,
			}}
			trackColor={{ false: '#767577', true: '#81b0ff' }}
			thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
			onValueChange={() => dispatch(toggleTheme())}
			value={isEnabled}
		/>
	);
};

import { StyledView } from '@/components/atoms/StyledView';
import { StyledText } from '@/components/atoms/StyledText';
import { ThemeSwitch } from '@/components/atoms/ThemeSwitch';

export const OptionsScreen = () => {
	return (
		<StyledView>
			<StyledText>I am a options screen</StyledText>
			<ThemeSwitch />
		</StyledView>
	);
};

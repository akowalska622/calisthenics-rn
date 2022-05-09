import { StyledText } from '@/components/atoms/StyledText';
import { typography } from '@/Themes';

export const Header = ({ children, size, style }) => {
	return (
		<StyledText
			style={{ fontSize: typography[size], marginVertical: 10, ...style }}
		>
			{children}
		</StyledText>
	);
};

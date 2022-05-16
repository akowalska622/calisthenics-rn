import styled from 'styled-components';
import { StyledText } from '@/components/atoms/StyledText';

export const Header = ({ children, size, ...restOfProps }) => {
	return (
		<StyledHeader size={size} {...restOfProps}>
			{children}
		</StyledHeader>
	);
};

const StyledHeader = styled(StyledText)`
	font-size: ${({ theme, size }) => theme[size]};
`;

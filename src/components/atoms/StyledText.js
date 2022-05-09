import styled from 'styled-components';

export const StyledText = ({ children, ...restOfProps }) => {
	return <Text {...restOfProps}>{children}</Text>;
};

const Text = styled.Text`
	color: ${({ theme }) => theme.text};
`;

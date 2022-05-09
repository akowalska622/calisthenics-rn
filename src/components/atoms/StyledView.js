import styled from 'styled-components';

export const StyledView = ({ children, ...restOfProps }) => {
	return <Styled {...restOfProps}>{children}</Styled>;
};

const Styled = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.background};
	padding: 20px;
`;

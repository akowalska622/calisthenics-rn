import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import { StyledText } from '@/components/atoms/StyledText';

export const PressableCard = ({
	children,
	onPress = () => {},
	hasIcon = false,
	iconProps = {},
}) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => ({
				opacity: pressed ? 0.6 : 1,
			})}
		>
			{hasIcon && (
				<Ionicons
					name={iconProps.name}
					color={iconProps.color}
					size={iconProps.size}
					style={{ marginRight: 15 }}
				/>
			)}
			<StyledText>{children}</StyledText>
		</Pressable>
	);
};

const Pressable = styled.Pressable`
	background-color: ${({ theme }) => theme.surface};
	padding: 15px;
	margin: 7px;
	border-radius: 10px;
	flex-direction: row;
	align-items: center;
`;

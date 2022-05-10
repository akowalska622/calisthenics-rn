import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import { globalStyles } from '@/Themes';

const iconProps = {
	color: globalStyles.accent,
	size: 15,
	style: { margin: 2 },
};

export const Progress = ({ filled = 0 }) => {
	return (
		<ProgressContainer>
			<Ionicons name={filled > 0 ? 'star' : 'star-outline'} {...iconProps} />
			<Ionicons name={filled > 1 ? 'star' : 'star-outline'} {...iconProps} />
			<Ionicons name={filled > 2 ? 'star' : 'star-outline'} {...iconProps} />
		</ProgressContainer>
	);
};

const ProgressContainer = styled.View`
	flex-direction: row;
	position: absolute;
	right: 20px;
`;

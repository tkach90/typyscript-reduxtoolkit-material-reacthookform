import React from 'react';
import { CheckboxProps } from '@mui/material/Checkbox';
import { StyledCheckbox } from './Checkbox.styles';


const CustomCheckbox: React.FC<CheckboxProps> = (props) => {
	return (
		<StyledCheckbox {...props} />
	);
};

export default CustomCheckbox;
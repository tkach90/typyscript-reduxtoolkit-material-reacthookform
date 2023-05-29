import React from 'react';
import Button from '@material-ui/core/Button';
import { ButtonProps } from './Button.types';
import { useStyles } from './Button.styles';
import { ButtonVariant } from './Button.types';


const GeneralButton: React.FC<ButtonProps> = ({ label, onClick, children}) => {
	const classes = useStyles();

	return (
		<Button
			onClick={onClick}
			className={classes.root}
			variant={ButtonVariant.Outlined}
		>
			{children}
			{label}
		</Button>
	);
};

export default GeneralButton;
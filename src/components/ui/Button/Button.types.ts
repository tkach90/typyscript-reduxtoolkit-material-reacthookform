import { ReactNode } from 'react';

export interface ButtonProps {
	type: string;
	disabled?: boolean;
	label: string;
	onClick?: () => void;
	variant?: ButtonVariant;
	children?: ReactNode;
}

export enum ButtonVariant {
	Contained = 'contained',
	Outlined = 'outlined',
	Text = 'text',
}
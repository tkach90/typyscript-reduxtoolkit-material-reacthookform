import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


export const CustomTextField = styled(TextField)({
	'& .MuiInputBase-root': {
		display: 'flex',
		alignItems: 'center',
		color: 'gray',
	},
	'& .MuiInput-underline:before': {
		borderBottomColor: 'gray',
	},
	'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
		borderBottomColor: '#5dcb42',
	},
	'& .MuiInput-underline.Mui-focused:before': {
		borderBottomColor: '#5dcb42',
	},
	'& .MuiInput-underline.Mui-error:after': {
		borderBottomColor: 'red',
	},
	'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
		borderColor: '#5dcb42',
	},
	'& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
		color: '#5dcb42',
	},
	'& .MuiInputBase-input': {
		padding: '8px',
	},
});
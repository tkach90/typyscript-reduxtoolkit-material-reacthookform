import { makeStyles } from "@material-ui/core/styles";
import { ButtonVariant } from "./Button.types";

export const useStyles = makeStyles({
	root: {
		textTransform: "capitalize",
		color: "#5dcb42",
		borderColor: "#5dcb42",

		'&:hover': {
			variant: ButtonVariant.Contained,
			backgroundColor: "#5dcb42",
			color: "#fff",
			border: "0",
		},
	},
});

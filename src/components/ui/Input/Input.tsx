import React from 'react';
import { CustomInputProps } from "./Input.types";
import { CustomTextField } from "./Input.styles";


const GeneralInput: React.FC<CustomInputProps> = (props) => {
	return <CustomTextField {...props} />
};

export default GeneralInput;





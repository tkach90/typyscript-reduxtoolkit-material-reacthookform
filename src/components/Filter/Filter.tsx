import React, { ChangeEvent, useState } from 'react';
import GeneralInput from "../ui/Input/Input";
import GeneralButton from "../ui/Button/Button";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { FilterComponentProps } from "./Filter.types";
import {StyledContainer} from "./Filter.styles";


const FilterComponent: React.FC<FilterComponentProps> = ({ onFilter }) => {
	const [filterText, setFilterText] = useState('');
	const [showDone, setShowDone] = useState(false);

	const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newText = event.target.value;
		setFilterText(newText);
		onFilter(newText, showDone);
	};

	const handleShowDoneClick = () => {
		setShowDone(false);
		onFilter(filterText, false);
	};

	const handleShowAllClick = () => {
		setShowDone(true);
		onFilter(filterText, true);
	};

	return (
		<StyledContainer>
			<GeneralInput
				type="text"
				value={filterText}
				onChange={handleFilterChange}
				placeholder="Search by text"
			/>
			<GeneralButton type="button" onClick={handleShowAllClick} label="All" />
			<GeneralButton type="button" onClick={handleShowDoneClick} label="Done" >
				<CheckCircleOutlineIcon fontSize={"small"} />
			</GeneralButton>
		</StyledContainer>
	);
};

export default FilterComponent;

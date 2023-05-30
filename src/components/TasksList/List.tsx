import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { updateTask, deleteTask } from '../../store/formSlice';
import { RootState } from '../../store/rootReducer';
import CustomCheckbox from '../ui/Checkbox/Checkbox';
import { ListItemChecked } from './List.types';
import { Task } from '../../store/formSlice';
import { StyledListItem, StyledListItemText, DeleteIcon } from './List.styles';
import GeneralButton from "../ui/Button/Button";
import FilterComponent from "../Filter/Filter";


const sortTasks = (tasks: Array<Task>) => {
	if ( !Array.isArray(tasks) ) {
		throw new Error('tasks is not array');
	}

	return tasks.sort((a, b) => {
		if (a.checked && !b.checked) {
			return 1;
		}
		if (!a.checked && b.checked) {
			return -1;
		}
		return 0;
	});
}

const TaskList: React.FC = () => {
	const dispatch = useDispatch();
	const { tasks } = useSelector((state: RootState) => state.tasks);
	const [ anchorEl, setAnchorEl ] = useState(null);
	const [ selectedTaskId, setSelectedTaskId ] = useState('');
	const [ deleteConfirmationOpen, setDeleteConfirmationOpen ] = useState(false);
	const [ filterText, setFilterText ] = useState('');
	const [ showDone, setShowDone ] = useState(true);

	const handleOptionsClick = (event: any, taskId: string) => {
		setAnchorEl(event.currentTarget);
		setSelectedTaskId(taskId);
	};

	const handleOptionsClose = () => {
		setAnchorEl(null);
	};

	const handleDeleteConfirmationOpen = () => {
		setDeleteConfirmationOpen(true);
		handleOptionsClose();
	};

	const handleDeleteConfirmationClose = () => {
		setDeleteConfirmationOpen(false);
	};

	const handleDeleteTask = () => {
		dispatch(deleteTask(selectedTaskId));
		handleDeleteConfirmationClose();
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>, data: ListItemChecked) => {
		const { checked } = event.target;

		dispatch(updateTask({ id: data.id, checked }));
	};

	const handleFilter = (filterText: string, showDone: boolean) => {
		setFilterText(filterText);
		setShowDone(showDone);
	};

	const filteredTasks = tasks.filter((task) => {
		const taskText = task.text?.toLowerCase();
		const filterTextLower = filterText.toLowerCase();
		return taskText?.includes(filterTextLower) && (showDone || task.checked);
	});

	return (
		<>
			<FilterComponent onFilter={handleFilter} />
			{filteredTasks.length === 0 ? (
				<p>No tasks found.</p>
			) : (
				<List>
					{sortTasks(filteredTasks).map((task) => (
						<StyledListItem key={task.id}>
							<CustomCheckbox
								onChange={(event) => handleChange(event, task)}
								checked={task.checked || false}
							/>
							<StyledListItemText primary={task.text} checked={task.checked} />
							<IconButton onClick={
								(event) => handleOptionsClick(event, task.id)
							}>
								<MoreVertRoundedIcon />
							</IconButton>
						</StyledListItem>
					))}
				</List>
			)}
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleOptionsClose}
			>
				<MenuItem onClick={handleDeleteConfirmationOpen}>
					<DeleteIcon />
				</MenuItem>
			</Menu>
			<Dialog open={deleteConfirmationOpen} onClose={handleDeleteConfirmationClose}>
				<DialogTitle>Confirm Delete</DialogTitle>
				<DialogContent>
					Are you sure you want to delete it?
				</DialogContent>
				<DialogActions>
					<GeneralButton
						type="button"
						onClick={handleDeleteConfirmationClose}
						label="No"
					/>
					<GeneralButton
						type="button"
						onClick={handleDeleteTask}
						label="Yes"
					/>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default TaskList;

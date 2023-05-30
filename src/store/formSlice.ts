import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
	id: string;
	text?: string;
	checked: boolean;
}

interface FormState {
	tasks: Array<Task>;
}

const initialState: FormState = {
	tasks: [],
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		createTask: (state, action: PayloadAction<Task>) => {
			state.tasks.push(action.payload);
		},
		updateTask: (state, action: PayloadAction<Task>) => {
			const { id, checked } = action.payload;
			const taskToUpdate = state.tasks.find((task) => task.id === id);
			if (taskToUpdate) {
				taskToUpdate.checked = checked;
			}
		},
		deleteTask: (state, action: PayloadAction<string>) => {
			const taskId = action.payload;
			state.tasks = state.tasks.filter((task) => task.id !== taskId);
		}
	},
});

export const { createTask, updateTask, deleteTask } = formSlice.actions;
export default formSlice.reducer;

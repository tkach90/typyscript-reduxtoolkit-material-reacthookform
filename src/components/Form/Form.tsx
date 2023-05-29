import React, { useState } from 'react';
import { useForm, useController } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createTask } from '../../store/formSlice';
import GeneralInput from '../ui/Input/Input';
import Button from '../ui/Button/Button';
import { FormData } from './Form.types';
import { StyledContainer } from './Form.styles';


const TaskForm = () => {
	const dispatch = useDispatch();
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const { field } = useController({
		name: 'task',
		control,
		rules: { minLength: 2 },
		defaultValue: '',
	});

	const onSubmit = (data: FormData) => {
		setIsSubmitting(true);

		try {
			dispatch(createTask({id: uuidv4(), text: data.task, checked: false}));
			reset({task: ''});
		} catch (error) {
			console.error('Error creating task:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleSubmit(onSubmit)(e);
	};


	return (
		<form onSubmit={handleFormSubmit}>
			<StyledContainer>
				<GeneralInput
					onChange={field.onChange}
					value={field.value}
					label="Your task"
					placeholder="Write your checklist text here"
					error={!!errors.task}
					helperText={errors.task?.type === 'minLength' && 'At least 2 characters'}
				/>
				<Button onClick={handleSubmit(onSubmit)} type="submit" disabled={isSubmitting} label="Add task" />
			</StyledContainer>
		</form>
	);
};

export default TaskForm;

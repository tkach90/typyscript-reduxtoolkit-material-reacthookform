import { combineReducers } from '@reduxjs/toolkit';
import formReducer from './formSlice';


const rootReducer = combineReducers({
	tasks: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
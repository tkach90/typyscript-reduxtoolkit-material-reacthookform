import { StyledContainer } from './Container.styles';
import TaskForm from "../components/Form/Form";
import TaskList from "../components/TasksList/List";


const ContainerApp = () => {
	return (
		<>
			<StyledContainer maxWidth={"xs"}>
				<TaskList/>
				<TaskForm />
			</StyledContainer>
		</>
	);
};

export default ContainerApp;

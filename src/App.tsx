import React from "react";
import TaskList from "./components/TasksList/List";
import TaskForm from "./components/Form/Form";
import { StyledContainer } from "./App.styles";

function App() {
  return (
    <>
      <StyledContainer maxWidth={"xs"}>
        <TaskList />
        <TaskForm />
      </StyledContainer>
    </>
  );
}

export default App;

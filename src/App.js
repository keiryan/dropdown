import { useState } from "react";
import "./App.css";
import DropDown from './Dropdown/dropdown';
import { Container, ValueContainer } from "./app.styles";

function App() {
  const list = new Array(10).fill(null);
  const [value, setValue] = useState("");

  const handleToggle = (value) => {
    setValue(value);
  };
  return (
    <Container>
      <DropDown handleToggle={handleToggle} list={list} toggled="" />
      <ValueContainer>{value}</ValueContainer>
    </Container>
  );
}

export default App;

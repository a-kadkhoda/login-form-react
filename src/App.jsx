import { useState } from "react";
import "./App.css";
import HeaderMenu from "./components/HeaderMenu";
import LoginForms from "./components/LoginForms";

function App() {
  const [name, setName] = useState("Log In");
  const getName = (value) => {
    setName(value);
  };
  return (
    <>
      <HeaderMenu name={name} />
      <LoginForms getName={getName} />
    </>
  );
}

export default App;

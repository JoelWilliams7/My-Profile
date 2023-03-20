import React from "react";
import { NavBar, Contacts, Skills, Projects, UpButton } from "./components";

function App() {
  return (
    <div className="App">
      <UpButton />
      <NavBar />
      <Contacts />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

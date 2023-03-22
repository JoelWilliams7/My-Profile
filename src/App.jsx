import React from "react";
import {
  NavBar,
  Contacts,
  Skills,
  Projects,
  UpButton,
  Footer,
  Resume,
} from "./components";

function App() {
  return (
    <div className="App">
      <UpButton />
      <NavBar />
      <Contacts />
      <Skills />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;

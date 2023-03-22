import React from "react";
import {
  NavBar,
  Content,
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
      <Content />
      <Contacts />
      <Skills />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;

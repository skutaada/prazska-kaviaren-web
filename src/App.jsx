import { Switch, Route } from "wouter";

import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/prazska-kaviaren-web" component={Hero} />
        <Route path="/prazska-kaviaren-web/about" component={About} />
        <Route path="/prazska-kaviaren-web/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;

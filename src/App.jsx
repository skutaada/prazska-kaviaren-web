import { Switch, Route } from "wouter"

import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"


function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path="/" component={Hero}/>
        <Route path="/about" component={About}/>
      </Switch>
    </>
  )
}

export default App

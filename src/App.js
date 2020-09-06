import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolios from "./pages/Portfolios";
import Resumes from "./pages/Resumes";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Portfolios} />
        <Route path="/resume" component={Resumes} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

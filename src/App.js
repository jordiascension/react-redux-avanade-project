import React, { Component } from "react"
import { Route, Link, Switch } from "react-router-dom"
import reduxLogo from "./img/redux.svg"
import "./App.css"
import  Students  from "./components/Students"
import  StudentForm  from "./components/StudentForm"
import  NotFound  from "./components/NotFound"
import  About  from "./components/About"

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
            <div className="lapp-header-title">
              <h1>React Redux CRUD sample</h1>
              <img src={reduxLogo} className="App-logo" alt="redux logo" />
            </div>
            <div>
              <Link to="/">Home</Link> | 
              <Link to="/students/new">New Student</Link> | 
              <Link to="/about">About</Link> | 
            </div>
            <Switch>
              <Route exact path="/" component={Students}/>
              <Route exact path="/students/new" component={StudentForm}  />
              <Route exact path="/students/edit/:id" component={StudentForm}  />
              <Route exact path="/404" component={NotFound}/>
              <Route path="/students/:id" component={Students} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
          </Switch>
          
        </div>
      </div>
    );
  }
}


export default App
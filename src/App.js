import React, { Component } from "react"
import { Route, Link, Switch } from "react-router-dom"
import reduxLogo from "./img/redux.svg"
import "./App.css"
import  Notes  from "./components/Notes"
import  NoteForm  from "./components/NoteForm"
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
              <Link to="/notes/new">New Note</Link> | 
              <Link to="/about">About</Link> | 
            </div>
            <Switch>
              <Route exact path="/" component={Notes}/>
              <Route exact path="/notes/new" component={NoteForm}  />
              <Route exact path="/notes/edit/:id" component={NoteForm}  />
              <Route exact path="/404" component={NotFound}/>
              <Route path="/notes/:id" component={Notes} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
          </Switch>
          
        </div>
      </div>
    );
  }
}


export default App
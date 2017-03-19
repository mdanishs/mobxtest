import React, { Component } from 'react';
import {Route, Redirect} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import {About, Settings, Intro} from "./Components"
import {observer} from "mobx-react"


let App = observer(class App extends Component {
  constructor(){
    super()
    this.state={
      redirect:true
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route path="/about" component={About}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/intro/:name" render={()=>(
          this.state.redirect ? <Redirect to="/introduction"/> : <About/>
        )}/>
        <Route path="/introduction" component={Intro}/>
      </div>
    );
  }
})

export default App;

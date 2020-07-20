import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import axios from 'axios';
import Login from './components/login';

var url = "https://e58b8bfe.ngrok.io/api/helloworld"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: ''
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  handleMouseOver() {
    axios.get(url).then((res) => {
      console.log(res.data.name);
      this.setState({ msg: res.data.name })
    });
  }
  handleOnLoad() {
    axios.get(url).then((res) => {
      console.log(res.data.name);
      this.setState({ msg: res.data.name })
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App" defaultValue={this.handleOnLoad}>
          <Navbar />
          <div>{this.state.msg}</div>
          <button onMouseOver={this.handleMouseOver}>Hover Me {this.state.msg} </button>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

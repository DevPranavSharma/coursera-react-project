import React,{Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      dishes:DISHES
    }
  }
  render(){
    return (
      <div className="App">
        <Navbar dark color='primary'>
        <div className="container">
           <NavbarBrand href="/">Restorante Con Fusion</NavbarBrand>
        </div>
        </Navbar>
        <Menu dishes={DISHES}/>
      </div>
    );
  }
  
}

export default App;

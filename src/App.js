import React, { Component } from 'react';
import Flavor from './components/Flavor';
import './Flavor.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      flavors: ["Chocolate", "Carmel", "Moose Tracks"]
    };
  }

  render() {
    const flavors = this.state.flavors.map((flavor, i)=>{
      return <Flavor flavorName={flavor} key={i} scoops={0} ></Flavor>
    });
    return (
      <div>
        {flavors}
      </div>
    );
  }
}

export default App;
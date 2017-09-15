import React, { Component } from 'react';

class Flavor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scoops: this.props.scoops
    };

    this.addScoop = this.addScoop.bind(this);
    this.subScoop = this.subScoop.bind(this);

  }

  addScoop(){
    this.setState({
      scoops: this.state.scoops < 3 ? this.state.scoops + 1 : 3
    });
  }

  subScoop(){
    this.setState({
      scoops: this.state.scoops > 0 ? this.state.scoops - 1 : 0
    });
  }

  render() {
    return (
      <div className="Flavor">
        <h1>{this.props.flavorName}</h1>
        <button onClick={this.subScoop}>-</button>
        <span className="Scoops">{this.state.scoops}</span>
        <button onClick={this.addScoop}>+</button>
      </div>
    );
  }
}

export default Flavor;
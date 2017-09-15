import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Link to={"/Flavor"}>WELCOME</Link>
      </div>
    );
  }
}
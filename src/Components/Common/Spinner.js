import React, { Component } from 'react';
import spinner from '../../Components/Common/spinner_icon.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div>
            <img
                src={spinner}
                style={{ width: "250px", margin: 'auto', display: "block" }}
                alt="Loading....."
            />
      </div>
    )
  }
}

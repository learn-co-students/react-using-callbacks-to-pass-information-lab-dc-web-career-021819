import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  constructor() {
    super();
    this.state = { color: "#000" };
  }

  genRow = vals => vals.map((val, idx) => <Cell cb={this.getColor} key={idx} color={val} />);

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  getColor = () => {
    return this.state.color;
  };

  setColor = color => {
    this.setState({ color: color }, () => console.log(this.state.color));
  };

  render() {
    return (
      <div id="app">
        <ColorSelector cb={this.setColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};

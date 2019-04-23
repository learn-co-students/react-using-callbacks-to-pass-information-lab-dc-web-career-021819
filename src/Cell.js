import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  changeCellColor = (newColor) => {
    this.setState({
      color: newColor
    })
  }


  render() {
    return (
      <div className="cell" onClick={()=>{this.changeCellColor(this.props.getCurrentColor())}} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}

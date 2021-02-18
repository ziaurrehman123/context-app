import React, { Component } from 'react'
import User from "./User";
export const myContext = React.createContext();
export default class App extends Component {
  state={
    name:"Zia",
    roll: 109
  };
  handleClickContext = ()=>{
    this.setState({roll: this.state.roll + 1})
  }
  render() {
    const contextValue={
      data: this.state,
      handleClick: this.handleClickContext
    }
    return (
      <myContext.Provider value={contextValue}>
        <User />
      </myContext.Provider>
    )
  }
}

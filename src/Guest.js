import React, { Component } from 'react'
import {myContext} from './App'
export default class Guest extends Component {
    render() {
        return (
            <div>
                <h3>Guest Component</h3>
               <myContext.Consumer>
                   {({data, handleClick}) => (<div>
                       <h4>Name:{data.name} Value:{data.roll}</h4>
                       <button onClick={handleClick}>Change Value</button>
                       </div> )}
               </myContext.Consumer>
                
            </div>
        )
    }
}

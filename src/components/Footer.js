import React, { Component } from 'react'
import logo from "../logo.png"
export default class Footer extends Component {
    render() {
        return (
           <footer className="container-fluid" >
           <div className="row">
           <div className="col">
                    <p className="text-center text-blue">  <img src={logo} width="120px" height="80px" alt="" /> Digital Forest</p>

               </div>
              
           </div>
               
               
           </footer>
        )
    }
}

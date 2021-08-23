import React from 'react'


export default function Menu() {
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
     
    return (
        <div>
           <div id="mySidebar" className="sidebar">
 
  
  
  
  

</div> 
<div id="main">
  <i   id="openbtn" onClick={openNav} className="fa fa-bars" aria-hidden="true"></i>
</div>
        </div>
    )
}

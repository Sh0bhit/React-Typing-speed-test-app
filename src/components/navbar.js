import React from 'react';
import '../css/main.css'
import { Link } from "react-router-dom";


export default function navbar(){

return(
    <div className="navbar wf-section">
         <div className="nav-left">
            <div className="nav-text">
               <div className="text-block">Typester</div>
            </div>
         </div>
         <div className="nav-right w-clearfix"><Link to="/" className="nav-button-2 w-button">Home</Link>
         </div>
      </div>

)

}
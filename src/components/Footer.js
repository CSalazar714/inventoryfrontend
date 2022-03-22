// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";


function BottomNavBar(){
      return (
            <div className = 'navbar'>
                  <h6>App Created by: Carlos Salazar</h6>
                  <Link to = '/Home'>Home</Link>
                  
            </div>
)
}

export default BottomNavBar
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";


function NavBar(){
      return (
            <div className = 'navbar'>
                  <h1>This is the NavBar</h1>
                  <Link to = '/Home'>Home</Link>
                  <br/>
                  <Link to = '/Inventory'>Inventory</Link>
                  <br/>
                  <Link to = '/AddItemForm'>AddItem</Link>
            </div>
)
}

export default NavBar
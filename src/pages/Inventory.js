import ItemList from "../components/InventoryList";
import {useEffect} from 'react'
import { connect } from "react-redux";
import {fetchitem} from '../actions/Actions'


function Inventory(props) {
      useEffect(()=>{
        props.fetchitem()
    }, [])
      return (
        <div className="InventoryListing">
         
          <ItemList />
      {props.isLoading ? "INVENTORY IS LOADING" : "INVENTORY LOADED" }
      {props.error !== "" ? props.error : ""}
        </div>
      );
    }

export default connect(null,{fetchitem})(Inventory );
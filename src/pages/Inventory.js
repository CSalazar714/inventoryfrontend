import InventoryList from "../components/InventoryList";
import {useEffect} from 'react'

function Inventory(props) {
      useEffect(()=>{
        props.fetchitem()
    }, [])
      return (
        <div className="InventoryListing">
         
          <InventoryList />
      {props.isLoading ? "INVENTORY IS LOADING" : "INVENTORY LOADED" }
      {props.error !== "" ? props.error : ""}
        </div>
      );
    }

export default Inventory;
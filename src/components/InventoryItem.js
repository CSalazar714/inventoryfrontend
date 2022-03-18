import { useState } from 'react'
import { connect } from 'react-redux'
import { removeItem, updateItem } from '../actions/Actions'

// function InventoryItem(props){
//     const [Sold, setSold] = useState(props.Item.Sold)
    // async function handleUpdate(e){
    //     e.preventDefault()
        
    //    await props.updateItem(props.Item._id, {Sold: !Sold})
    //     setSold(!Sold)
    // }

    // function handleClick(e){
    //     e.preventDefault()
    //     props.removeItem(e.target.id,
    //         props.Item)
    // }
    return(
        <>
        <h2>{props.Item.Item_Name}</h2>
        <p>{props.Item.Category_Id}</p>
        <h4>{props.Item.Description}</h4>
        <p>{props.Item.Location}</p>
        <p>{props.Item.Date_Listed}</p>
        <p>{props.Item.Quantity}</p>
        <p>{props.Item.Sold}</p>
        {/* Need Button for Updating Item */}
        {/* Need Button for removing Item */}
        </>
    )
}

export default connect(null, {removeItem, updateItem})(InventoryItem)
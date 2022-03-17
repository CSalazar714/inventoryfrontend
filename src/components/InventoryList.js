import { connect } from 'react-redux'
import InventoryItem from './InventoryItem'



const mapStateToProps = (state) => ({
    ItemData : state.ItemData
})

 function ItemList(props){
    return(
        <>
        {props.ItemData.map(Item =>{
           return( 
            <>
                <InventoryItem Item={Item} key={Item._id}/>
            </>
           )
        })}
        </>
    )
}

export default connect(mapStateToProps, {})(ItemList)
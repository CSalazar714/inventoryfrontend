import { connect } from 'react-redux'
// import InventoryItem from './InventoryItem'
import ItemData from '../Data'



const mapStateToProps = (state) => ({
    ItemData : state.ItemData
})

 function ItemList(props){
     console.log(props)
    return(
        <>
        {props.ItemData.map(Item =>{
           return( 
            <>
                <ItemData Item = {Item} key={Item}/>
                {/* <ItemData/> */}
            </>
           )
        })}
        </>
    )
}

export default connect(mapStateToProps, {})(ItemList)
import {useState} from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/Actions'

 function ItemForm(props){
    const [initialForm] = useState({
      Item_Name: "",
      Category_Id: "",
      Description: "",
      Location: "",
      Date_Listed: "",
      Quantity: 2,
      Sold: false
    })

    //universal form handler
    const [form, setForm] = useState(initialForm)

    //universal change handler
    function handleChange(e){
        console.log(e.target.name, e.target.value)
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addItem(form)
        setForm(initialForm)

    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label for="title">Item Name: </label>
            <input type="text" name="title" onChange={handleChange}/>
            <br/>
            <label for="category">Category: </label>
            <input type="text" name="category" onChange={handleChange}/>
            <br/>
            <label for="description">Description: </label>
            <input type="text" name="description" onChange={handleChange}/>
            <br/>
            <label for="location">Location Stored:</label>
            <input type="text" name="location" onChange={handleChange}/>
            <br/>
            <label for="dateListed">Date Listed:</label>
            <input type="date" name="dateListed" onChange={handleChange}/>
            <br/>
            <button>Submit</button>
        </form>
        
        </div>
    )
}

export default connect(null, {addItem}) (ItemForm)
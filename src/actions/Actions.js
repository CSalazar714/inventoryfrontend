import axios from 'axios'

export const FETCH_ITEM_START = "FETCH_ITEM_START"
export const FETCH_ITEM_SUCCESS = "FETCH_ITEM_SUCCESS"
export const FETCH_ITEM_FAIL = "FETCH_ITEM_FAIL"
export const ADD_ITEM = "ADD_ITEM"
export const UPDATE_ITEM = "UPDATE_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"

export const fetchitem = () => (dispatch) => {
  dispatch({type: FETCH_ITEM_START})
  axios
  .get("https://inventorybackend-carlos.herokuapp.com/inventory")
  .then(data => {
        console.log(data.data)
    dispatch({type: FETCH_ITEM_SUCCESS, payload: data.data.inventory_list})
  })
  .catch(err => {
    dispatch({type: FETCH_ITEM_FAIL, payload: err.message})
  })
}

export const addItem = (item) => (dispatch) =>{
    dispatch({type: FETCH_ITEM_START})
    axios
    .post("https://inventorybackend-carlos.herokuapp.com/", item)
    .then(data => dispatch({type: ADD_ITEM, payload: data.data.inventory_list}))
    .catch(err => dispatch({type: FETCH_ITEM_FAIL, payload: err.message}))
    // 
  }

  export const removeItem = (id, item) => (dispatch) => {
    dispatch({type: FETCH_ITEM_START})
      axios
      .delete(`https://inventorybackend-carlos.herokuapp.com/${id}`)
      .then(data => dispatch({type: REMOVE_ITEM, payload: item}))
      .catch(err => dispatch({type: FETCH_ITEM_FAIL, payload: err.message}))
  
    }

    export const updateItem = (id, update) => (dispatch) =>{
      dispatch({type: FETCH_ITEM_START})
      axios
      .put(`https://inventorybackend-carlos.herokuapp.com/${id}`, update)
      .then(data => dispatch({type: UPDATE_ITEM, payload: data.data.inventory_list}))
      .catch(err => dispatch({type: FETCH_ITEM_FAIL, payload: err.message})
      )
    } 
  
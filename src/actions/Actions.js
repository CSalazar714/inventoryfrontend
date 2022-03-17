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
  .get("")
  .then(data => {
        console.log(data.data.item_list)
    dispatch({type: FETCH_ITEM_SUCCESS, payload: data.data.item_list})
  })
  .catch(err => {
    dispatch({type: FETCH_ITEM_FAIL, payload: err.message})
  })
}

export const addItem = (item) => (dispatch) =>{
    dispatch({type: FETCH_ITEM_START})
    axios
    .post("", item)
    .then(data => dispatch({type: ADD_ITEM, payload: data.data.item}))
    .catch(err => dispatch({type: FETCH_ITEM_FAIL, payload: err.message}))
    // 
  }

  export const removeItem = (id, item) => (dispatch) => {
    dispatch({type: FETCH_ITEM_START})
      axios
      .delete(`${id}`)
      .then(data => dispatch({type: REMOVE_TODO, payload: todo}))
      .catch(err => dispatch({type: FETCH_TODO_FAIL, payload: err.message}))
  
    }

    export const updateTodo = (id, update) => (dispatch) =>{
      dispatch({type: FETCH_TODO_START})
      axios
      .put(`https://todo-fullstack-carlos.herokuapp.com/todo/${id}`, update)
      .then(data => dispatch({type: UPDATE_TODO, payload: data.data.todo_item}))
      .catch(err => dispatch({type: FETCH_TODO_FAIL, payload: err.message})
      )
    } 
    // update todo
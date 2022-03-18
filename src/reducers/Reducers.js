import data from '../Data'
import { FETCH_ITEM_START, FETCH_ITEM_SUCCESS, FETCH_ITEM_FAIL, ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM } from '../actions/Actions'

const initialState = {
    ItemData: data,
    isLoading: false,
    error: ""
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_ITEM_START:
            return {
                ...state, ItemData: state.ItemData, error: "", isLoading: true
            }
        case FETCH_ITEM_FAIL:
            return {
                ...state, ItemData: state.ItemData, error: action.payload, isLoading: false
            }
        case FETCH_ITEM_SUCCESS:
            return {
                ...state, ItemData: action.payload, error: "", isLoading: false
            }
        case ADD_ITEM:
            return {
                ...state, ItemData: [...state.ItemData, action.payload], isLoading: false
            }
        case REMOVE_ITEM:
                let newState = state.ItemData.filter(item => item !== action.payload)
                return {
                    ...state, ItemData: newState
                }    
            // ===================
            case UPDATE_ITEM:

                let updatedState=[]
                for (let i = 0; i< state.ItemData.length; i++){
                    if (state.ItemData[i]._id === action.payload._id){
                        updatedState.push(action.payload)
                    } else{
                        updatedState.push(state.ItemData[i])
                    }
                }
                
                return {
                    ...state, ItemData: updatedState
                }
        default:
            return state
    }
}
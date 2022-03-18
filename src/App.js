import './App.css';
import ItemList from './components/InventoryList'
import ItemForm from './components/InventoryForm'
import { useEffect } from 'react'
import {fetchitem} from './actions/Actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error
})
 
function App(props) {
  useEffect(()=>{
    props.fetchitem()
})
  return (
    <div className="App">
      <ItemForm />
      {props.isLoading ? "INVENTORY IS LOADING" : "INVENTORY LOADED" }
      <ItemList />
      {props.error !== "" ? props.error : ""}
    </div>
  );
}

export default connect(mapStateToProps, {fetchitem})(App)
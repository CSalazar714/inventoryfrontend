import './App.css';
import ItemList from './components/InventoryList'
import ItemForm from './components/InventoryForm'
import { useEffect } from 'react'
import {fetchitem} from './actions/Actions'
import {connect} from 'react-redux'
import InventoryList from './components/InventoryList';
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Header from "./components/Header"

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error
})
 
function App(props) {
  useEffect(()=>{
    props.fetchitem()
}, [])
  return (
    <div className="App">
      <Header/>
      <ItemForm />
      {props.isLoading ? "INVENTORY IS LOADING" : "INVENTORY LOADED" }
      <ItemList />
      {props.error !== "" ? props.error : ""}
      {/* <Footer/> */}

      {/* <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route exact path = '/Inventory' component = {InventoryList}/>
            <Route exact path = '/Categories' component = {Categories}/>
      </Switch> */}
    </div>
  );
}

export default connect(mapStateToProps, {fetchitem})(App)
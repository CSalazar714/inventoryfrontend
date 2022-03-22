import './App.css';
import { useEffect } from 'react'
import {connect} from 'react-redux'
import {Route , Switch} from 'react-router-dom'
import {fetchitem} from './actions/Actions'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Inventory from './pages/Inventory';
import AddItemForm from './pages/AddItemForm'


const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error
})
 
function App(props) {
  useEffect(()=>{
    props.fetchitem()
}, )
  return (
    <div className="App">
      <Header/>
      <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route  path = '/Home' component = {Home}/>
            <Route  path = '/Inventory' component = {Inventory}/>
            <Route  path = '/AddItemForm' component = {AddItemForm}/>
      </Switch>
      
        <Footer/>
    </div>
  );
}
// export default App
export default connect(mapStateToProps, {fetchitem})(App)
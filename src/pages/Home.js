import { Link } from "react-router-dom";

const Home = ( ) => {
      return (
        <div>
          <h1>Home Page</h1>
          <Link to="/AddItemForm">
                <button color="white" className="AddItemButton">
                  <span>Add New Item</span>
                </button>
            </Link>
          
          <br/>
          <Link to="/Inventory">
                <button color="white" className="InventoryButton">
                  <span>View Existing Inventory</span>
                </button>
            </Link>
          <br/>
          <button>Ebay</button>
          <button>OfferUp</button>
          
        </div>
      );
    };
    
    export default Home;
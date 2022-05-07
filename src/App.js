import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Footer from './components/Footer/Footer';
import FAQ from './components/FAQ/FAQ';
import Location from './components/Location/Location';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';
import ManageInventories from './components/ManageInventories/ManageInventories';
import AddItem from './components/AddItem/AddItem';



function App() {
  return (
    <div className=" dark:bg-gray-800">
      <div>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/inventory" element={<Inventory></Inventory>}></Route>
          <Route path="/items/:inventoryId" element={<InventoryDetails></InventoryDetails>}></Route>
          <Route path="/FAQ" element={<FAQ></FAQ>}></Route>
          <Route path="/location" element={<Location></Location>}></Route>
          <Route path="/manageinventories" element={<ManageInventories></ManageInventories>}></Route>
          <Route path="/addItem" element={<AddItem></AddItem>}></Route>
        </Routes>


      </div>

      <div>

        <Footer></Footer>
      </div>





    </div>


  );
}

export default App;

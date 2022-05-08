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
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequireAuth from './components/Requireauth/RequireAuth';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div className=" dark:bg-gray-800">
      <div>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/inventory" element={<Inventory></Inventory>}></Route>
          <Route path="/items/:inventoryId" element={<RequireAuth><InventoryDetails></InventoryDetails></RequireAuth>}></Route>
          <Route path="/FAQ" element={<FAQ></FAQ>}></Route>
          <Route path="/location" element={<Location></Location>}></Route>
          <Route path="/manageinventories" element={<RequireAuth><ManageInventories></ManageInventories></RequireAuth>}></Route>
          <Route path="/addItem" element={<AddItem></AddItem>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>


      </div>

      <div>

        <Footer></Footer>
      </div>





    </div>


  );
}

export default App;

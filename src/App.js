import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Footer from './components/Footer/Footer';
import FAQ from './components/FAQ/FAQ';



function App() {
  return (
    <div className=" bg-red-100">
      <div>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/inventory" element={<Inventory></Inventory>}></Route>
          <Route path="/FAQ" element={<FAQ></FAQ>}></Route>
        </Routes>


      </div>

      <div>

        <Footer></Footer>
      </div>





    </div>


  );
}

export default App;

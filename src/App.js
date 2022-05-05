import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';


function App() {
  return (
    <div className="App bg-gray-100">
      <Header></Header>

      <Routes>
        <Route path="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" element={<Home></Home>}></Route>
        <Route path="/about" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" element={<About></About>}></Route>
      </Routes>

    </div>
  );
}

export default App;

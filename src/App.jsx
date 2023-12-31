import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from '../src/components/pages/Home/Home';
import Cart from "./components/pages/Cart/Cart";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import Medicine from "./components/pages/Medicine/Medicine";
import Ambulance from "./components/pages/Ambulance/Ambulance";
import About from "./components/pages/About/About";


function App() {

  return (
    <>
       <Routes>        
        <Route index path='/' element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/signin' element={<UserProfile/>}/>
      </Routes>

      <Routes>
        <Route exact path='/medicine' element={<Medicine/>}/>
        <Route exact path='/ambulance' element={<Ambulance/>}/>
      </Routes>
    </>
  );
}

export default App;

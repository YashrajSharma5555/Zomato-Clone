
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Login-Signup/Signup";
import Login from "./components/Login-Signup/Login"
import Navbar from "./components/Navbar/Navbar";
import MyComponent from "./fetchFoods";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dining" element={<Navbar/>}></Route>
        <Route path="/dinings" element={<MyComponent/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;



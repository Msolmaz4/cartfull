import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProj from "./pages/AddProj";
import DetailPage from "./pages/DetailPage";
import Main from "./pages/Main";
import Update from "./pages/Update";
import ProductContectProvider from "./context/Product";
import './App.css'

function App() {
  return (
    <ProductContectProvider>
       <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/add' element={<AddProj/>} />s
        <Route  path="/detail/:id" element={<DetailPage/>}/>
        <Route  path="/update/:id" element={<Update/>}/>
      </Routes>
    </Router>

    </ProductContectProvider>
   
  );
}

export default App;

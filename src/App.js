import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProj from "./pages/AddProj";
import DetailPage from "./pages/DetailPage";
import Main from "./pages/Main";
import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/add' element={<AddProj/>} />s
        <Route  path="/detail" element={<DetailPage/>}/>
        <Route  path="/update" element={<Update/>}/>
      </Routes>
    </Router>
  );
}

export default App;

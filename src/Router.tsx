import React from 'react';
import Home from './pages/Home';
import Test from './pages/Test';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function Router() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/test' element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;

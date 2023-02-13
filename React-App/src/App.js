import React, { Fragment } from 'react'
import Login from './components/login'
import Home from './components/home'
import Register from './components/register'
import Report from './components/report/report.js'
import Turno from './components/turno.js'
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";


function App() {

  return (

    <Fragment>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register/" element={<Register />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/report/:id/" element={<Report />} />
          <Route path="/report/:id/:turno" element={<Turno />} />
        </Routes>
      </Router>



    </Fragment>
  );
}

export default App;

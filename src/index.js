import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Home from './components/Home';
import Error from './components/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Banner />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)
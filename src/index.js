import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Banner from './components/Banner';
import App from './components/App';
import Error from './components/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Banner />
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="*" element={<Error />} />
          </Routes>
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)
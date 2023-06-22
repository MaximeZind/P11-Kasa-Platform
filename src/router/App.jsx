import React from 'react';
import BaseLayout from './BaseLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import Accommodation from '../pages/Accommodation';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BaseLayout />} >
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/accommodation/:id" element={<Accommodation />} />
                    <Route path="*" element={<Error />} />
                </ Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

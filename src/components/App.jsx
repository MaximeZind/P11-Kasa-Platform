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
            <BaseLayout>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/accommodation/:id" element={<Accommodation />} />
                    <Route path="*" element={<Error />} />
            </Routes>
            </BaseLayout>
        </BrowserRouter>
    );
}

export default App;

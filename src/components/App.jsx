import React from 'react';
import BaseLayout from './BaseLayout';
import Home, { loaderHome } from '../pages/Home';
import About, { loaderAbout } from '../pages/About';
import Error from '../pages/Error';
import Accommodation, { loaderAccommodation } from '../pages/Accommodation';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BaseLayout />} >
                    <Route index 
                    element={<Home />} 
                    loader={loaderHome}/>
                    <Route path="/about" 
                    element={<About />} 
                    loader={loaderAbout}/>
                    <Route path="/accommodation/:id" 
                    element={<Accommodation />} 
                    loader={loaderAccommodation}/>
                    <Route path="*" element={<Error />} />
                </ Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

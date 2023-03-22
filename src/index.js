import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Location from './pages/Location/Location'
import Header from './Components/Header/Header';
import Error from './pages/404';
import Footer from './Components/Footer/Footer';
import Propos from './pages/Propos/Propos';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Header></Header>
        <Routes>
            <Route path='/' element={<App></App>}></Route>
            <Route path='/a-propos' element={<Propos></Propos>}></Route>
            <Route path='/location/:id' element={<Location></Location>}></Route>
            <Route path='*' element={<Error></Error>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

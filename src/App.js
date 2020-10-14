import React from 'react';

import './style.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Details from "./components/Details/Details";
import Calendar from "./components/Calendar/Calendar";


function App() {
    return (
        <React.Fragment>
            <Header/>
            <Main/>
            <Features/>
            <Footer/>
            <Details/>
          {/*  <Calendar/>*/}
        </React.Fragment>
    );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import { Header, Footer } from "../components";
import { MainPage } from "./";

function Applayout() {

    return(
        <React.Fragment>
            <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} end/>
                    </Routes>
                </main>
            <Footer />
        </React.Fragment>
    )
}


export default Applayout;
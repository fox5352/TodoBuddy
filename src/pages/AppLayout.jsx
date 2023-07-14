
import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import { Header, Footer } from "../components";
import { MainPage, NotePage } from "./";

function Applayout() {

    return(
        <React.Fragment>
            <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} end/>
                        <Route path="/:id" element={<NotePage />} end/>
                    </Routes>
                </main>
            <Footer />
        </React.Fragment>
    )
}


export default Applayout;
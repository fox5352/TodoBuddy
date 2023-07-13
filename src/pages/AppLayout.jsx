import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
//Components
import { Header, Footer } from "../components";
import { useApp } from "../context/AppContext";
import { MainPage, NotePage } from "./";

function Applayout() {
    const { todoList, setCounter } = useApp()



    useEffect(()=>{
        localStorage.setItem('tasklist', JSON.stringify(todoList))
        setCounter(todoList.length)
    }, [todoList])    

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
import React, { useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
//Components
import { Header, Footer } from "../components";
import { useApp } from "../context/AppContext";
import { MainPage, NotePage } from "./";

function Applayout() {
    const { counter, todoList, setCounter } = useApp()

    const updateData = useCallback(
      () => {
        localStorage.setItem('tasklist', JSON.stringify(todoList))
        counter === 0 && setCounter(todoList.length)
      },
      [counter, setCounter, todoList],
    )
    

    useEffect(()=>{
        updateData()
    }, [updateData])    

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
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
//Components
import { Header, Footer } from "../components";
import { useApp } from "../context/AppContext";
import { MainPage } from "./";

function Applayout() {
    const { todoList, setNotes } = useApp()

    useEffect(()=>{
        const NoteList = JSON.parse(localStorage.getItem('tasklist')) || []
        setNotes(NoteList)
    }, [])

    useEffect(()=>{
        localStorage.setItem('tasklist', JSON.stringify(todoList))
    }, [todoList])


    
    

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
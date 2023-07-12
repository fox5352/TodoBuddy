import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//local imports 
import AppLayout from './pages/AppLayout';
import { AppProvider } from "./context/AppContext";

import 'bootstrap-icons/font/bootstrap-icons.min.css'

function App() {

    return (
        <Router>  
            <AppProvider>
                <AppLayout />
            </AppProvider>
        </Router>
    );
}

export default App;
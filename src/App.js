import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//local imports 
import AppLayout from './pages/AppLayout';

function App() {

    return (
        <Router>
            <AppLayout />
        </Router>
    );
}

export default App;
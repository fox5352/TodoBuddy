import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//local imports 
import AppLayout from './pages/AppLayout';
// redux provider and store
import { Provider } from "react-redux";
import store from "./store/store";


import 'bootstrap-icons/font/bootstrap-icons.min.css'

function App() {

    return (
        <Router>
            <Provider store={store}>
                <AppLayout />
            </Provider>
        </Router>
    );
}

export default App;
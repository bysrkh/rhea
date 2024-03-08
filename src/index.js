import App from "./container/App"

import ReactDOM from "react-dom/client"
import React from "react";
import bootstrap from 'bootstrap'
import './style.css'

const app = ReactDOM.createRoot(document.querySelector('#app'));
app.render(
    <React.StrictMode>
            <App/>
    </React.StrictMode>
)
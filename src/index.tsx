"use client"

import {createRoot, Root} from "react-dom/client"
import * as React from "react"
import 'bootstrap/scss/bootstrap.scss'
import * as bootstrap from "bootstrap"

import App from "./container/App"
import './style.scss'

const app: Root = createRoot(document.querySelector('#app')!)
app.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
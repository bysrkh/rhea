import React, {lazy, Suspense} from 'react'
import {configureStore} from "@reduxjs/toolkit";
import ProductReducer from "../flux/reducer/ProductReducer";
import {Provider} from "react-redux";
import LoadingReducer from "../flux/reducer/LoadingReducer";

import Container from "./Container";
import ProductPage from "../page/ProductPage";
import LoginPage from "../page/LoginPage";
import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";

import AuthenticationReducer from "../flux/reducer/AuthenticationReducer";
import HomePage from "../page/HomePage";
import {isProtected, getPrincipalInformation} from "../page/AuthenticationLoader";
const AssetPage = lazy(() => import(/* webpackChunkName: "asset" */ "../page/AssetPage"))

const store = configureStore({
    reducer: {product: ProductReducer.reducer, loading: LoadingReducer.reducer, authentication: AuthenticationReducer.reducer}
})

const router = createBrowserRouter([
    {
        path: "/",
        element: <Container/>,
        loader: getPrincipalInformation,
        id: 'principal',
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/login",
                element: <LoginPage/>
            },
            {
                path: "/product",
                element: <ProductPage/>,
                loader: isProtected
            },
            {
                path: "/asset",
                element: <Suspense fallback={<span>loading</span>}><AssetPage/></Suspense>
            }
        ]
    }
])

const App = props => {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </>
    )
}

export default App
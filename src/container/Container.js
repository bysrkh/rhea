"use client"

import { Outlet, useLoaderData } from "react-router-dom";
import React, { useEffect } from "react";
import NavigationPanel from "../component/common/NavigationPanel";

export default function Container() {
    const principal = useLoaderData()
    console.log(`begini ${JSON.stringify(principal)}`)


    useEffect(() => {

    }, [principal?.principal]);

    return (
        <>
            <div className="min-vh-100">
                <NavigationPanel principal={principal?.principal}/>
                <div id="container" className="d-lg-flex flex-lg-grow-1">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}
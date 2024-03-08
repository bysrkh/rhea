import {Outlet, useLoaderData} from "react-router-dom";
import React, {useEffect} from "react";
import NavigationPanel from "../component/common/NavigationPanel";

export default function Container() {
    const principal = useLoaderData()
    console.log(`begini ${JSON.stringify(principal)}`)


    useEffect(() => {

    }, [principal?.principal]);

    return (
        <div id="container" className="container-fluid">
            <div className="row">
                <NavigationPanel principal={principal?.principal}/>
            </div>
            <div className="row">
                <Outlet/>
            </div>
        </div>
    )
}
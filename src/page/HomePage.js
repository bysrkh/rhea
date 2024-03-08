import React from "react";
import LoginForm from "../component/auth/login/LoginForm";
import {useLoaderData} from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <p>Welcome to our page</p>
            <button className="btn btn-primary"></button>
            <LoginForm/>
        </>
    )
}

export default HomePage
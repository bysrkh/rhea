import { Link, NavLink, useRouteLoaderData } from "react-router-dom";
import React from "react";

const NavigationPanel = ({principal}) => {

    return (<>
        <header id="navigation-panel"
                className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <nav id="navigation-panel-brand" className="d-lg-flex">
                <a className="navbar-brand" href="#">Otofiks</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navigation-panel-menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navigation-panel-menu" className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link"
                                     href="#">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/asset" className="nav-link"
                                     href="#">Asset</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/product" className="nav-link"
                                     href="#">Product</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link className="btn btn-outline-success" to="/login">Login</Link>
                    </div>
                </div>
            </nav>
        </header>

            
            {/*<ul>*/}
            {/*    {principal ? <>*/}
            {/*            <li><span>user is : {principal}</span></li>*/}
            {/*            <li><Link to="/logout">Logout</Link></li>*/}
            {/*        </> :*/}
            {/*        <li><Link to="/login">Login</Link></li>*/}
            {/*    }*/}
            {/*</ul>*/}
    </>)
}

export default NavigationPanel;  
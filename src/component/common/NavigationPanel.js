import {Link, useRouteLoaderData} from "react-router-dom";
import React from "react";
const NavigationPanel = ({principal}) => {

    return (<nav>
        <ul>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/asset">Asset</Link></li>
            {principal ? <>
                    <li><span>user is : {principal}</span></li>
                    <li><Link to="/logout">Logout</Link></li>
                </> :
                <li><Link to="/login">Login</Link></li>
            }
        </ul>
    </nav>)
}

export default NavigationPanel;  
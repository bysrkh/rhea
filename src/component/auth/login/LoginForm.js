import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {fireOnAuthenticate} from "../../../flux/action/AuthenticationThunkAction";
import {useDispatch, useSelector} from "react-redux";
import SubmitLoginValidation from "./LoginValidation";
import {value} from "lodash/seq";

const   LoginForm = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(currentState => {console.log(currentState.authentication); return currentState.authentication.isAuthenticated;})
    const isLoading = useSelector(currentState => currentState.loading.isLoading)
    const [state, setState] = useState({username: {value: '', errors: []}})


    useEffect(() => {
        isAuthenticated && navigate("/product")
    }, [isAuthenticated])

    const fireOnSubmitLogin = (event) => {
        event.preventDefault()

        dispatch(fireOnAuthenticate())

    }

    const fireOnChange = (event) => {
        event.preventDefault()

        const {name, value} = event.target
        const {error} = SubmitLoginValidation.extract(name).validate(value)
        const errors = error ? [...error.details.map(message => message)] : [];

        setState({...state, [name]: {value, errors: undefined}})
    }

    return (<>
        {isLoading && <p>data is on loading</p>}
        <form method="POST" onSubmit={fireOnSubmitLogin}>
            <div className="relative">
                <label>username</label>
                <input type="text" name="username" value={state.username.value}
                       onChange={fireOnChange}
                       className="-border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 transition duration-300"/>
            </div>

            <button type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log
                In!
            </button>
        </form>

    </>)
}

export default LoginForm
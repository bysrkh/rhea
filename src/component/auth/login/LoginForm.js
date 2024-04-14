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
        <form className="col-lg-2 align-self-center mx-auto bg-body-tertiary"
              method="POST" onSubmit={fireOnSubmitLogin}>
            <div className="row">
                <label className="col-lg-3 col-form-label-lg"
                       htmlFor="username">Username</label>
                <div className="col-lg-9">
                    <input className="form-control" type="text" name="username"
                           value={state.username.value}
                           onChange={fireOnChange}/>
                </div>
            </div>
            <div className="row">
                <label className="col-lg-3 col-form-label-lg"
                       htmlFor="username">Password</label>
                <div className="col-lg-9">
                    <input className="form-control" type="text" name="username"
                           value={state.username.value}
                           onChange={fireOnChange}/>
                </div>
            </div>

            <button className="btn btn-success" type="submit">
                Login
            </button>
        </form>

    </>)
}

export default LoginForm
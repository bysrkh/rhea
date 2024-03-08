import { json, redirect } from "react-router-dom";
import Cookies from "js-cookie"
import PrincipalInformation from "./PrincipalInformation";

const isProtected = ({request, params}) => {
    const principalCookie = Cookies.get("principal")

    return principalCookie ? null : redirect("/login")


    return null
}

const getPrincipalInformation = async () => {
    const principalCookie = Cookies.get("principal")

    console.log('principal is ' + principalCookie)
    if (!principalCookie)
        return null

    const principalInformation = JSON.parse(principalCookie)

    return json(principalInformation, {status: 200})
}


export { isProtected, getPrincipalInformation }
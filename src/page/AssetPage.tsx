import React from "react";
import AssetCreateForm from "../component/asset/create/AssetCreateForm";
import { useSelector } from "react-redux";
import {Permission} from "../component/auth/type"
import {AuthenticationState} from "../flux/AuthenticationState"

const AssetPage = (): React.ReactNode => {
    console.log('construct asset page')

    const permissions: Permission[] = useSelector<Permission[]>((state: {authentication: AuthenticationState}) => state.authentication.permissions)

    console.log(`permission : ${JSON.stringify(permissions)}`)
    return (
        <>
            {permissions.includes("asset.add") && <AssetCreateForm/>}
            <p>List of Assset Here</p>
        </>
    )
}

export default AssetPage
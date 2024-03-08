import React from "react";
import AssetCreate from "../component/asset/AssetCreate";
import {useSelector} from "react-redux";

const AssetPage = () => {
    const permissions = useSelector(state => state.authentication.permissions)

    console.log(`permission : ${JSON.stringify(permissions)}`)
    return (
        <>
            {permissions.includes("asset.add") && <AssetCreate/>}
            <p>List of Assset Here</p>
        </>
    )
}

export default AssetPage
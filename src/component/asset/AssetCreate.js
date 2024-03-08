import {useState} from "react"
import React from "react"


let assetCreateFormInitialState = {
    code: {
        value: '',
        errors: []
    },
    name: {
        value: '',
        errors: []
    }
}
const AssetCreate = () => {
    const [assetCreateForm, setAssetCreateForm] = useState({...assetCreateFormInitialState})

    const fireOnChange = (event) => {
        event.preventDefault()

        const {name, value} = event.target
        const errors = []

        setAssetCreateForm({...assetCreateForm, [name]: {value, errors}})
    }

    return (<>
        <form method="POST" >
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={assetCreateForm.name.value} onChange={fireOnChange}/>
            </div>
            <div>
                <label htmlFor="code">Code</label>
                <input type="text" name="code" value={assetCreateForm.code.value} onChange={fireOnChange}/>
            </div>

        </form>
    </>)
}

export default AssetCreate
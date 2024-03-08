"use client"

import React, {Component} from 'react'
import {connect} from "react-redux";
import CreateProductValidation from "../../util/validation/CreateProductValidation";
import {fireOnSubmitCreateProduct} from "../../flux/action/ProductThunkAction";

class ProductCreate extends Component {

    constructor(props) {
        super(props);


        console.log('constructor()')

        this.invokeFireOnChange =this.invokeFireOnChange.bind(this)
        this.invokeFireOnSubmit =this.invokeFireOnSubmit.bind(this)

        this.state = {
            name: { value: '', errors: [], isBlurred: false}
        }
    }

    render() {
        console.log('render()' + JSON.stringify(this.state))

        return (
            <>
                <p>
                    Hahahaha
                </p>
                <form method="POST" onSubmit={this.invokeFireOnSubmit}>
                    <label htmlFor="name">Begitulah</label>
                    <input type="text" id="name" name="name" value={this.state.name.value} onChange={this.invokeFireOnChange}/>
                    <div>{this.state.name.errors && this.state.name.errors.map(message => message)}</div>
                    <button type="submit">dafuq</button>
                </form>
                </>
        )
    }

    invokeFireOnChange = (event) => {
        event.preventDefault()

        console.log('invokeFireOnChange()')

        const {name, value} = event.target
        const { error} = CreateProductValidation.extract(name).validate(value)

        this.setState({
            ...this.state,
            [event.target.name]: {
                value, errors: error ? [...error.details.map(error => error.message)] : []
            }
        })

    }

    invokeFireOnSubmit = (event) => {
        event.preventDefault()

        this.props.invokeFireOnCreateProduct()
        this.props.history("/login")

    }

}


const mapStateToProps = state => ({
    productList: [...state.product.productList],
    isLoading: state.loading.isLoading
})

const mapDispatchToProps = dispatch => ({
    invokeFireOnCreateProduct: () => dispatch(fireOnSubmitCreateProduct())

})


export default connect(mapStateToProps, mapDispatchToProps)(ProductCreate)
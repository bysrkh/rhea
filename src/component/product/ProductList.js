import React, {Component} from 'react'
import {connect} from "react-redux";
import {getProductList} from "../../flux/reducer/ProductReducer";
import {setLoading} from "../../flux/reducer/LoadingReducer";
import {fireOnGetProductList} from "../../flux/action/ProductThunkAction.js";

class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.invokeFireOnGetProductList()
    }

    render() {

        return (
            <>
                {this.props.isLoading &&  <p>data is processing</p>}
                {this.props.productList && this.props.productList.map(product => <p>{product}</p>)}
            </>
        )
    }

}


const mapStateToProps = state => ({
    productList: [...state.product.productList],
    isLoading: state.loading.isLoading
})

const mapDispatchToProps = dispatch => ({
    invokeFireOnGetProductList: () => dispatch(fireOnGetProductList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
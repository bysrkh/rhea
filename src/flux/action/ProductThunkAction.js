import {getProductList} from "../reducer/ProductReducer";
import {setLoading} from "../reducer/LoadingReducer";
import {useNavigate} from "react-router-dom";

export const fireOnGetProductList = (dispath) => {
    return async (dispatch) => {
        dispatch(setLoading({isLoading: true}))
        await (() => new Promise(resolve => setTimeout(resolve, 3000)))()

        dispatch(getProductList({productList: ["Lorem Ipsum", "Dolor Sit Amet"]}))
        dispatch(setLoading({isLoading: false}))

    }
}

export const fireOnSubmitCreateProduct = (dispatch) => {
    return async (dispatch, getState)   => {
        dispatch(setLoading({isLoading: true}))

    }
}

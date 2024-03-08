import {getProductList} from "../reducer/ProductReducer";
import {setLoading} from "../reducer/LoadingReducer";
import {useNavigate} from "react-router-dom";
import {setRolesAndPermission} from "../reducer/AuthenticationReducer";
import Cookies from "js-cookie";
import PrincipalInformation from "../../page/PrincipalInformation";
export const fireOnAuthenticate = (dispatch) => {
    return async (dispatch) => {
        dispatch(setLoading({isLoading: true}))
        //
        // const date = new Date();
        // date.setTime(date.getTime() + (60 * 1000));
        // const expires = '; expires=' + date.toUTCString();
        // document.cookie = 'begini =' + 'dafuq' + expires + '; path=/';

       const principal = await new Promise(resolve => setTimeout(() => {
            const principal = new PrincipalInformation(
                'haidi',
                null,
                null,
                null,
                ["engineer"],
                ["product.add", "product.edit", "product.delete", "asset.add"]
            )
            resolve(principal)
        }, 3000))

        console.log(`set principal is here ${JSON.stringify(principal)}`)
        Cookies.set('principal', JSON.stringify(principal), {expires: 2, path: '/'})
        dispatch(setRolesAndPermission({
            isAuthenticated: true,
            roles: [...principal.roles],
            permissions: [...principal.permissions]
        }))
        dispatch(setLoading({isLoading: false}))
    }
}


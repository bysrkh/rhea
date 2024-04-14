import {Permission, Role} from "../component/auth/type"

export interface AuthenticationState {
    isAuthenticated: boolean
    roles: Role[]
    permissions: Permission[]
}
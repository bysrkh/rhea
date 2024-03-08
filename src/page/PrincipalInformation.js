class PrincipalInformation {
    constructor(principal, accessToken, resetToken, expiryDate, roles, permissions) {
        this.principal = principal
        this.accessToken = accessToken
        this.resetToken = resetToken
        this.expiryDate = expiryDate
        this.roles = roles
        this.permissions = permissions
    }
}

export default PrincipalInformation
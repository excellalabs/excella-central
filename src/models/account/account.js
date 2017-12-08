var Account = (function () {
    function Account(email, password, isAdmin, emailVerified) {
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
        this.emailVerified = emailVerified;
    }
    return Account;
}());
export { Account };
//# sourceMappingURL=account.js.map
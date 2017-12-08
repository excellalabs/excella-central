var PasswordValidator = (function () {
    function PasswordValidator() {
    }
    PasswordValidator.passwordsMatch = function (control) {
        if (control.value != control.root.value['password']) {
            return {
                "passwordsDoNotMatch": true
            };
        }
        return null;
    };
    return PasswordValidator;
}());
export { PasswordValidator };
//# sourceMappingURL=passwords.js.map
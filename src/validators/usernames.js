var UsernameValidator = (function () {
    function UsernameValidator() {
    }
    UsernameValidator.checkAccount = function (control) {
        if (control.value == "accountExists@excella.com") {
            return {
                "accountExists": true
            };
        }
        return null;
    };
    UsernameValidator.profileExists = function (control) {
        if (control.value == "profileDoesNotExist@excella.com") {
            return {
                "profileDoesNotExist": true
            };
        }
        return null;
    };
    return UsernameValidator;
}());
export { UsernameValidator };
//# sourceMappingURL=usernames.js.map
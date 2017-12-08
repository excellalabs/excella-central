var UsernameValidator = (function () {
    function UsernameValidator(accountService, profileService) {
        this.accountService = accountService;
        this.profileService = profileService;
    }
    UsernameValidator.checkAccount = function (control) {
        if (control.value == 'accountExists@excella.com') {
            return {
                accountExists: true
            };
        }
        return null;
    };
    UsernameValidator.profileExists = function (control) {
        if (control.value == 'profileDoesNotExist@excella.com') {
            return {
                profileDoesNotExist: true
            };
        }
        return null;
    };
    return UsernameValidator;
}());
export { UsernameValidator };
//# sourceMappingURL=usernames.js.map
var Profile = (function () {
    function Profile(firstName, lastName, avatarUrl, primarySkillset, client, serviceArea) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatarUrl = avatarUrl || '';
        this.primarySkillset = primarySkillset;
        this.client = client;
        this.serviceArea = serviceArea;
    }
    return Profile;
}());
export { Profile };
export function generateFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
//# sourceMappingURL=profile.js.map
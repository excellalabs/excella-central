var Profile = (function () {
    function Profile(firstName, lastName, photoUrl, primarySkillset, client, email, serviceArea) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.photoUrl = photoUrl || '';
        this.client = client;
        this.email = email;
        this.primarySkillset = primarySkillset;
        this.serviceArea = serviceArea;
    }
    return Profile;
}());
export { Profile };
export function generateFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
//# sourceMappingURL=profile.js.map
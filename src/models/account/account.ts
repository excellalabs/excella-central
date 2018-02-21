export class Account {
    id?: string;
    email: string;
    password: string;
    userType: string;
    emailVerified: boolean;

    constructor(email: string, password: string, userType: string, emailVerified: boolean) {
        this.email = email;
        this.password = password;
        this.userType = userType;
        this.emailVerified = emailVerified;
    }
}
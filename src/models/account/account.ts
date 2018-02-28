export class Account {
    id?: string;
    email: string;
    password: string;
    isAdmin: boolean;
    emailVerified: boolean;

    constructor(email: string, password: string, isAdmin: boolean, emailVerified: boolean) {
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
        this.emailVerified = emailVerified;
    }
}
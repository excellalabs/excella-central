export class Org {
  id?: string;
  name: string;
  emailDomain: string;
  contactName: string;
  contactEmail: string;
  adminEmail: string;
  logoUrl: string;

  constructor(
    name: string,
    emailDomain: string,
    contactName: string,
    contactEmail: string,
    adminEmail: string,
    logoUrl: string
  ) {
    this.name = name;
    this.emailDomain = emailDomain;
    this.contactName = contactName;
    this.contactEmail = contactEmail;
    this.adminEmail = adminEmail;
    this.logoUrl = logoUrl;
  }
}

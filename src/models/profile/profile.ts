export class Profile {
  id?: string;
  firstName: string;
  lastName: string;
  photoUrl?: string;
  primarySkillset?: string;
  client?: string;
  serviceArea?: string;
  buttonColor?: string;
  showSolidButton?: boolean;
  email?: string;

  constructor(
    firstName?: string,
    lastName?: string,
    photoUrl?: string,
    primarySkillset?: string,
    client?: string,
    email?: string,
    serviceArea?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.photoUrl = photoUrl || '';
    this.client = client;
    this.email = email;
    this.primarySkillset = primarySkillset;
    this.serviceArea = serviceArea;
  }
}

export function generateFullName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

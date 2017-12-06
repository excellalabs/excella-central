export class Profile {
  id?: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  primarySkillset?: string;
  client?: string;
  serviceArea?: string;
  buttonColor?: string;
  showSolidButton?: boolean;

  constructor(
    firstName: string,
    lastName: string,
    avatarUrl: string,
    primarySkillset?: string,
    client?: string,
    serviceArea?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatarUrl = avatarUrl || '';
    this.primarySkillset = primarySkillset;
    this.client = client;
    this.serviceArea = serviceArea;
  }
}

export function generateFullName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

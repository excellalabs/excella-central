export class Profile {
  id?: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  primarySkillset?: string;
  client?: string;
  funFact?: string;
  buttonColor?: string;
  showSolidButton?: boolean;
  email?: string;
  serviceArea?: string;

  constructor(
    firstName: string,
    lastName: string,
    avatarUrl: string,
    primarySkill?: string,
    client?: string,
    funFact?: string,
    email?: string,
    serviceArea?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatarUrl = avatarUrl || '';
    this.primarySkillset = primarySkill;
    this.client = client;
    this.funFact = funFact;
    this.email = email;
    this.serviceArea = serviceArea;
  }
}

export function generateFullName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

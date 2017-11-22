export class Profile {
  id?: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  primarySkill?: string;
  client?: string;
  funFact?: string;

  constructor(
    firstName: string,
    lastName: string,
    avatarUrl: string,
    primarySkill?: string,
    client?: string,
    funFact?: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.avatarUrl = avatarUrl || '';
      this.primarySkill = primarySkill;
      this.client = client;
      this.funFact = funFact;
    }
}

export function generateFullName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

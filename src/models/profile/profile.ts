export class Profile {
  id?: string = '1';
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  primarySkill?: string = 'Developer';
  client?: string = 'NRECA';
  funFact?: string = 'Part of JSSA';

  constructor(
    firstName: string,
    lastName: string,
    avatarUrl: string,
    primarySkill?: string,
    client?: string,
    funFact?: string) {
    }
}

export function generateFullName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

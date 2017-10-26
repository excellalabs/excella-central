export class User {
  id?: string = '1';
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  primarySkill?: string = 'Developer';
  client?: string = 'NRECA';
  funFact?: string = 'Part of JSSA';
}

export function generateFullName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

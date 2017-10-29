import { Component, Input } from '@angular/core';
import { User, generateFullName } from '../../models/user/user';;
/**
 * Generated class for the UserCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-card',
  templateUrl: 'user-card.html'
})

export class UserCardComponent {
  @Input() user: User[]
  fullName: string;

  constructor() {
  }

  getFullName(user: User): string {
    return generateFullName(user.firstName, user.lastName);
  }
}

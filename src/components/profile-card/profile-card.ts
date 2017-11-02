import { Component, Input } from '@angular/core';
import { Profile, generateFullName } from '../../models/profile/profile';;
/**
 * Generated class for the ProfileCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-card',
  templateUrl: 'profile-card.html'
})

export class ProfileCardComponent {
  @Input() profile: Profile[]
  fullName: string;

  constructor() {
  }

  getFullName(profile: Profile): string {
    return generateFullName(profile.firstName, profile.lastName);
  }
}

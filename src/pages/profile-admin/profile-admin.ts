import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile';
import { ProfileService } from '../../providers/profile.service/profile.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-profile-admin',
  templateUrl: 'profile-admin.html'
})
export class ProfileAdminPage {
  profile: Profile;
  profileForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public profileService: ProfileService,
    private formBuilder: FormBuilder
  ) {}

  async ionViewDidLoad() {
    const profileId = this.navParams.get('id');
    this.profile = profileId
      ? await this.profileService.getProfileById(profileId)
      : new Profile();

    this.profileForm = this.formBuilder.group({
      firstName: new FormControl(this.profile.firstName, Validators.required),
      lastName: new FormControl(this.profile.lastName, Validators.required),
      email: new FormControl(this.profile.email, [
        Validators.email,
        Validators.required
      ]),
      primarySkillset: new FormControl(this.profile.primarySkillset),
      client: new FormControl(this.profile.client),
      serviceArea: new FormControl(this.profile.serviceArea)
    });
  }

  async submitProfile() {
    this.updateProfileObject();
    if (this.profile.id) {
      await this.profileService.updateProfileById(this.profile);
    } else {
      await this.profileService.createProfile(this.profile);
    }
    this.navCtrl.pop();
  }

  updateProfileObject(): void {
    this.profile.firstName = this.profileForm.value.firstName;
    this.profile.lastName = this.profileForm.value.lastName;
    this.profile.email = this.profileForm.value.email;
    this.profile.primarySkillset = this.profileForm.value.primarySkillset;
    this.profile.client = this.profileForm.value.client;
    this.profile.serviceArea = this.profileForm.value.serviceArea;
  }
}

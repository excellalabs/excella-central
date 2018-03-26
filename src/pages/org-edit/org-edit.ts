import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Org } from '../../models/org/org';
import { OrgService } from '../../providers/org.service/org.service';

/**
 * Generated class for the OrgCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-org-edit',
  templateUrl: 'org-edit.html'
})
export class OrgEditPage {
  org: Org;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public orgService: OrgService
  ) {}

  async ionViewDidLoad() {
    this.org = await this.orgService.getOrg();
  }
}

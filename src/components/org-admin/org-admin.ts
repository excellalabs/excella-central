import { Component, OnInit } from '@angular/core';
import { Org } from '../../models/org/org';
import { OrgService } from '../../providers/org.service/org.service';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the OrgAdminComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'org-admin',
  templateUrl: 'org-admin.html'
})
export class OrgAdminComponent implements OnInit {
  org: any;

  constructor(public orgService: OrgService, public navCtrl: NavController) {}

  async ngOnInit() {
    this.org = await this.orgService.getOrg();
  }

  editOrg() {
    this.navCtrl.push('OrgEditPage');
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api.service/api.service';
import { User, generateFullName } from '../../models/user/user';
import {DirectoryDetailPage} from "../directory-detail/directory-detail";

/**
 * Generated class for the DirectoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {
  users: Promise<User[]>;
  generateFullName = generateFullName;
  searchText: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiServiceProvider: ApiServiceProvider) {
  }

  ionViewDidLoad(): void {
    this.searchText = "";
    this.users = this.getUsers();
  }

  async getUsers(): Promise<User[]> {
    return await this.apiServiceProvider.getUsers();
  }

  goToDirectoryDetail(user): void {
    this.navCtrl.push(DirectoryDetailPage, {user: user});
  }
}

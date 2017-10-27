import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectoryPage } from './directory';
import { SearchPipe } from '../../pipes/search/search';
import { UserCardComponent } from '../../components/user-card/user-card';

@NgModule({
  declarations: [
    SearchPipe,
    UserCardComponent
  ],
  imports: [
  ]
})
export class DirectoryPageModule {}

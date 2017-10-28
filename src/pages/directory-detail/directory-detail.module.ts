import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectoryDetailPage } from './directory-detail';

@NgModule({
  declarations: [
    DirectoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DirectoryDetailPage),
  ],
})
export class DirectoryDetailPageModule {}

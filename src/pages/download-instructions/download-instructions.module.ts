import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DownloadInstructionsPage } from './download-instructions';

@NgModule({
  declarations: [
    DownloadInstructionsPage,
  ],
  imports: [
    IonicPageModule.forChild(DownloadInstructionsPage),
  ],
})
export class DownloadInstructionsPageModule {}

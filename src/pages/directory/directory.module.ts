import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DirectoryPage } from './directory';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DirectoryPage
  ],
  imports: [
    IonicPageModule.forChild(DirectoryPage),
    PipesModule
  ],
  exports: [
    DirectoryPage
  ]
})
export class DirectoryPageModule {}

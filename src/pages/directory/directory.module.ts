import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DirectoryPage } from './directory';
import { PipesModule } from '../../pipes/pipes.module';

import {
  CloudinaryModule,
  CloudinaryConfiguration
} from '@cloudinary/angular-4.x';
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';

export const cloudinary = {
  Cloudinary: CloudinaryCore
};

@NgModule({
  declarations: [DirectoryPage],
  imports: [
    IonicPageModule.forChild(DirectoryPage),
    PipesModule,
    CloudinaryModule.forRoot(cloudinary, {
      cloud_name: 'excella'
    } as CloudinaryConfiguration)
  ],
  exports: [DirectoryPage]
})
export class DirectoryPageModule {}

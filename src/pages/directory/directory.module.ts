import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DirectoryPage } from './directory';
import { PipesModule } from '../../pipes/pipes.module';

import {
  CloudinaryModule,
  CloudinaryConfiguration
} from '@cloudinary/angular-4.x';
import { Cloudinary } from 'cloudinary-core';

export const cloudinaryLib = {
  Cloudinary: Cloudinary
};

@NgModule({
  declarations: [DirectoryPage],
  imports: [
    IonicPageModule.forChild(DirectoryPage),
    PipesModule,
    CloudinaryModule.forRoot(cloudinaryLib, {
      cloud_name: 'excella'
    } as CloudinaryConfiguration)
  ],
  exports: [DirectoryPage]
})
export class DirectoryPageModule {}

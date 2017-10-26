import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectoryPage } from './directory';
import { SearchPipe } from '../../pipes/search/search';
import { EmployeeCardComponent } from '../../components/employee-card/employee-card';

@NgModule({
  declarations: [
    SearchPipe,
    EmployeeCardComponent
  ],
  imports: [
  ],
})
export class DirectoryPageModule {}

import { NgModule } from '@angular/core';
import { SearchPipe } from '../../pipes/search/search';
import { ProfileCardComponent } from '../../components/profile-card/profile-card';

@NgModule({
  declarations: [
    SearchPipe,
    ProfileCardComponent
  ],
  imports: [
  ]
})
export class DirectoryPageModule {}

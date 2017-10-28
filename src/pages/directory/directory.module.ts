import { NgModule } from '@angular/core';
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

import { NgModule } from '@angular/core';
import { UserCardComponent } from './user-card/user-card';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [UserCardComponent],
	imports: [IonicModule.forRoot(UserCardComponent)],
	exports: [UserCardComponent]
})
export class ComponentsModule {}

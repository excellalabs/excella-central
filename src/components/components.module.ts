import { NgModule } from '@angular/core';
import { ProfileCardComponent } from './profile-card/profile-card';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [ProfileCardComponent],
	imports: [IonicModule.forRoot(ProfileCardComponent)],
	exports: [ProfileCardComponent]
})
export class ComponentsModule {}

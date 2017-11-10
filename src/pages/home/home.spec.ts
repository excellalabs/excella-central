import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController, NavParams} from 'ionic-angular';

import { HomePage } from './home';
import {
  NavMock,
  NavParamsMock
} from '../../test-config/mocks-ionic';

describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [HomePage],
          imports: [
            IonicModule.forRoot(HomePage)
          ],
          providers: [
            { provide: NavController, useClass: NavMock},
            { provide: NavParams, useClass: NavParamsMock}
          ]
        });
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
      });

      it('should be created', () => {
        expect(component).toBeDefined();
      });

      describe('openDirectoryPage', () => {
        it('should open DirectoryPage', () => {
          spyOn(component.navCtrl, 'push');
          component.openDirectoryPage();
          expect(component.navCtrl.push).toHaveBeenCalledWith('DirectoryPage');
        });
      });

      describe('openLoginPage', () => {
        it('should open LoginPage', () => {
          spyOn(component.navCtrl, 'push');
          component.openLoginPage();
          expect(component.navCtrl.push).toHaveBeenCalledWith('LoginPage');
        });
      });

      describe('logoutUser', () => {
        it('should log out user', () => {
          component.loggedIn = true;
          component.logoutUser();
          expect(component.loggedIn).toBe(false);
        });
      });

});

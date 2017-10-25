import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from './home';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';

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
            NavController,
            { provide: Platform, useClass: PlatformMock},
            { provide: StatusBar, useClass: StatusBarMock },
            { provide: SplashScreen, useClass: SplashScreenMock },
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

      it('returnTrue should return true', () => {
          expect(component.returnTrue(1)).toBeTruthy();
      });

      it('returnTrue should return false', () => {
        expect(component.returnTrue(0)).toBeFalsy();
    });
});
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, NavController, NavParams} from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from './home';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock,
  NavParamsMock
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
            { provide: NavParams, useClass: NavParamsMock},
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
});
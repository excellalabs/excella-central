import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController, NavParams} from 'ionic-angular';
import { NavMock, NavParamsMock } from '../../../test-config/mocks-ionic';
import { LoginPage } from './login';
import {HttpModule} from "@angular/http";
import {LoginApi, LoginInjectionToken, ProfilesApi, ProfilesInjectionToken} from "../../app/app-config";

describe('LoginPage', () => {
    let fixture: ComponentFixture<LoginPage>;
    let component: LoginPage;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [LoginPage],
          imports: [
            IonicModule.forRoot(LoginPage),
            HttpModule
          ],
          providers: [
            { provide: NavController, useClass: NavMock},
            { provide: NavParams, useClass: NavParamsMock},
            { provide: ProfilesInjectionToken, useValue: ProfilesApi },
            { provide: LoginInjectionToken, useValue: LoginApi }
          ]
        });
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(LoginPage);
        component = fixture.componentInstance;
      });

      it('should be created', () => {
        expect(component).toBeDefined();
      });
});

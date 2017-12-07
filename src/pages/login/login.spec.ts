import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import {
  NavMock,
  NavParamsMock,
  StorageMock
} from '../../../test-config/mocks-ionic';
import { LoginPage } from './login';
import { HttpModule } from '@angular/http';
import {
  AccountsApi,
  AccountsInjectionToken,
  ProfilesApi,
  ProfilesInjectionToken
} from '../../app/app-config';
import { Storage } from '@ionic/storage/es2015/storage';

describe('LoginPage', () => {
  let fixture: ComponentFixture<LoginPage>;
  let component: LoginPage;
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LoginPage],
        imports: [IonicModule.forRoot(LoginPage), HttpModule],
        providers: [
          { provide: NavController, useClass: NavMock },
          { provide: NavParams, useClass: NavParamsMock },
          { provide: ProfilesInjectionToken, useValue: ProfilesApi },
          { provide: AccountsInjectionToken, useValue: AccountsApi },
          { provide: Storage, useClass: StorageMock }
        ]
      });

      fixture = TestBed.createComponent(LoginPage);
      component = fixture.componentInstance;
    })
  );

  it('should be created', () => {
    expect(component).toBeDefined();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import {
  NavMock,
  NavParamsMock,
  AccountServiceMock
} from '../../../test-config/mocks-ionic';
import { LoginPage } from './login';
import { HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage/es2015/storage';
import { AccountService } from '../../providers/account.service/account.service';

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
          {
            provide: AccountService,
            useValue: AccountServiceMock
          }
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

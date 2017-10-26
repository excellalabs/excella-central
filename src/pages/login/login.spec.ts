import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, NavController, NavParams} from 'ionic-angular';
import { NavMock, NavParamsMock } from '../../../test-config/mocks-ionic';
import { LoginPage } from './login';

describe('LoginPage', () => {
    let fixture: ComponentFixture<LoginPage>;
    let component: LoginPage;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [LoginPage],
          imports: [
            IonicModule.forRoot(LoginPage)
          ],
          providers: [
            { provide: NavController, useClass: NavMock},
            { provide: NavParams, useClass: NavParamsMock}
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
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  IonicModule,
  NavController,
  NavParams,
  AlertController,
  LoadingController
} from 'ionic-angular';
import {
  NavMock,
  NavParamsMock,
  ProfileServiceMock,
  AuthenticationServiceMock,
  AccountServiceMock,
  AlertControllerMock,
  LoadingControllerMock
} from '../../../test-config/mocks-ionic';
import { DirectoryDetailPage } from './directory-detail';
import { ProfileService } from '../../providers/profile.service/profile.service';
import { AuthenticationService } from '../../providers/authentication.service/authentication.service';
import { AccountService } from '../../providers/account.service/account.service';

describe('DirectoryDetailPage', () => {
  let fixture: ComponentFixture<DirectoryDetailPage>;
  let component: DirectoryDetailPage;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DirectoryDetailPage],
        imports: [IonicModule.forRoot(DirectoryDetailPage)],
        providers: [
          { provide: NavController, useClass: NavMock },
          { provide: NavParams, useClass: NavParamsMock },
          { provide: ProfileService, useClass: ProfileServiceMock },
          {
            provide: AuthenticationService,
            useClass: AuthenticationServiceMock
          },
          { provide: AccountService, useClass: AccountServiceMock },
          { provide: AlertController, useClass: AlertControllerMock },
          { provide: LoadingController, useClass: LoadingControllerMock }
        ]
      });
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryDetailPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });
});

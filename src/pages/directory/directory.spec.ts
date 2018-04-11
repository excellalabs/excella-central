import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import {
  CloudinaryModule,
  CloudinaryConfiguration
} from '@cloudinary/angular-4.x';
import * as Cloudinary from 'cloudinary-core';
import {
  NavMock,
  NavParamsMock,
  SearchPipeMock,
  ProfileServiceMock,
  AuthenticationServiceMock,
  AccountServiceMock
} from '../../../test-config/mocks-ionic';
import { DirectoryPage } from './directory';
import { ProfileService } from '../../providers/profile.service/profile.service';
import { AuthenticationService } from '../../providers/authentication.service/authentication.service';
import { AccountService } from '../../providers/account.service/account.service';

describe('DirectoryPage', () => {
  let fixture: ComponentFixture<DirectoryPage>;
  let component: DirectoryPage;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DirectoryPage, SearchPipeMock],
        imports: [
          IonicModule.forRoot(DirectoryPage),
          CloudinaryModule.forRoot(Cloudinary, {
            cloud_name: ''
          } as CloudinaryConfiguration)
        ],
        providers: [
          { provide: NavController, useClass: NavMock },
          { provide: NavParams, useClass: NavParamsMock },
          {
            provide: ProfileService,
            useClass: ProfileServiceMock
          },
          {
            provide: AuthenticationService,
            useClass: AuthenticationServiceMock
          },
          {
            provide: AccountService,
            useClass: AccountServiceMock
          }
        ]
      });
      fixture = TestBed.createComponent(DirectoryPage);
      component = fixture.componentInstance;
    })
  );

  it('should be created', () => {
    expect(component).toBeDefined();
  });
});

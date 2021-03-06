import { TestBed, inject } from '@angular/core/testing';
import {
  HttpModule,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ProfileService } from '../profile.service/profile.service';
import {
  AccountsInjectionToken,
  ProfilesInjectionToken
} from '../../app/app-config';
import { Profile } from '../../models/profile/profile';
import {
  StorageMock,
  AuthenticationServiceMock
} from '../../../test-config/mocks-ionic';
import { IonicStorageModule } from '@ionic/storage';
import { AuthenticationService } from '../authentication.service/authentication.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, IonicStorageModule.forRoot()],
      providers: [
        ProfileService,
        { provide: XHRBackend, useClass: MockBackend },
        { provide: ProfilesInjectionToken, useValue: '' },
        { provide: AuthenticationService, useValue: AuthenticationServiceMock }
      ]
    });
  });

  describe('getProfiles', () => {
    it(
      'should return a promise with an array of profiles',
      inject([ProfileService, XHRBackend], (profileService, mockBackend) => {
        const mockResponse = [
          this.createMockProfile('0'),
          this.createMockProfile('1'),
          this.createMockProfile('2'),
          this.createMockProfile('3')
        ];
        mockBackend.connections.subscribe(connection => {
          connection.mockRespond(
            new Response(
              new ResponseOptions({
                body: JSON.stringify(mockResponse)
              })
            )
          );
        });
        profileService.getProfiles().then(profiles => {
          expect(profiles.length).toBe(4);
          expect(profiles[0].firstName).toEqual('Profile 0');
          expect(profiles[1].firstName).toEqual('Profile 1');
          expect(profiles[2].firstName).toEqual('Profile 2');
          expect(profiles[3].firstName).toEqual('Profile 3');
        });
      })
    );
  });
});

export function createMockProfile(id: string) {
  return new Profile('Profile ' + id, '', '');
}

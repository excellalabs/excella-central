import { TestBed, inject } from '@angular/core/testing';
import {
  HttpModule,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ProfileServiceProvider } from '../profile.service/profile.service';
import {
  AccountsInjectionToken,
  ProfilesInjectionToken
} from '../../app/app-config';
import { Profile } from '../../models/profile/profile';
import { StorageMock } from '../../../test-config/mocks-ionic';
import { IonicStorageModule } from '@ionic/storage';

describe('ApiServiceProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, IonicStorageModule.forRoot()],
      providers: [
        ProfileServiceProvider,
        { provide: XHRBackend, useClass: MockBackend },
        { provide: ProfilesInjectionToken, useValue: '' },
        { provide: AccountsInjectionToken, useValue: '' },
        { provide: Storage, useClass: StorageMock }
      ]
    });
  });

  describe('getProfiles', () => {
    it(
      'should return a promise with an array of profiles',
      inject(
        [ProfileServiceProvider, XHRBackend],
        (profileServiceProvider, mockBackend) => {
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
          profileServiceProvider.getProfiles().then(profiles => {
            expect(profiles.length).toBe(4);
            expect(profiles[0].firstName).toEqual('Profile 0');
            expect(profiles[1].firstName).toEqual('Profile 1');
            expect(profiles[2].firstName).toEqual('Profile 2');
            expect(profiles[3].firstName).toEqual('Profile 3');
          });
        }
      )
    );
  });
});

export function createMockProfile(id: string) {
  return new Profile('Profile ' + id, '', '');
}

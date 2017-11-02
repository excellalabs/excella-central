import { TestBed, inject } from '@angular/core/testing';
import {
  HttpModule,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ApiServiceProvider } from '../api.service/api.service';
import { ProfilesInjectionToken } from '../../app/app-config';

describe('ApiServiceProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ApiServiceProvider,
        { provide: XHRBackend, useClass: MockBackend },
        { provide: ProfilesInjectionToken, useValue: '' }
      ]
    });
  });

  describe('getProfiles', () => {
    it('should return a promise with an array of profiles',
      inject([ApiServiceProvider, XHRBackend], (apiServiceProvider, mockBackend) => {
        const mockResponse = {
          results: [
            this.createMockProfile(0),
            this.createMockProfile(1),
            this.createMockProfile(2),
            this.createMockProfile(3),
          ]
        };
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
        apiServiceProvider.getProfiles().then((profiles) => {
          expect(profiles.length).toBe(4);
          expect(profiles[0].firstName).toEqual('Profile 0');
          expect(profiles[1].firstName).toEqual('Profile 1');
          expect(profiles[2].firstName).toEqual('Profile 2');
          expect(profiles[3].firstName).toEqual('Profile 3');
        });
    }));
  });
});

export function createMockProfile(id: number) {
  var Profile = {
    id: id,
    name: {
      first: 'Profile ' + id,
      last: ''
    },
    picture: {
      thumbnail: ''
    }
  };
  return Profile;
}

import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ApiServiceProvider } from '../api.service/api.service';
import { USERS_API_URL } from '../../app/app-config';

describe('ApiServiceProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ApiServiceProvider,
        { provide: XHRBackend, useClass: MockBackend },
        { provide: USERS_API_URL, useValue: '' }
      ]
    });
  });

  describe('getUsers', () => {
    it('should return a promise with an array of users',
      inject([ApiServiceProvider, XHRBackend], (apiServiceProvider, mockBackend) => {
        const mockResponse = {
          results: [
            this.createMockUser(0),
            this.createMockUser(1),
            this.createMockUser(2),
            this.createMockUser(3),
          ]
        };

        this.createMockUser();
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });
        apiServiceProvider.getUsers().then((users) => {
          expect(users.length).toBe(4);
          expect(users[0].firstName).toEqual('User 0');
          expect(users[1].firstName).toEqual('User 1');
          expect(users[2].firstName).toEqual('User 2');
          expect(users[3].firstName).toEqual('User 3');
        });
    }));
  });
});

export function createMockUser(id: number) {
  var user = {
    id: id,
    name: {
      first: 'User ' + id,
      last: ''
    },
    picture: {
      thumbnail: ''
    }
  };
  return user;
}

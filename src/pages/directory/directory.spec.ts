import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
  inject,
  async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavController, NavParams } from 'ionic-angular';
import {
  NavMock,
  NavParamsMock,
  SearchPipeMock,
  UserCardComponentMock,
  ApiServiceProviderMock
} from '../../../test-config/mocks-ionic';
import { DirectoryPage } from './directory';
import { SearchPipe } from '../../pipes/search/search';
import { ApiServiceProvider } from '../../providers/api.service/api.service';
import { User } from '../../models/user/user';

describe('DirectoryPage', () => {
  let fixture: ComponentFixture<DirectoryPage>;
  let component: DirectoryPage;
  let apiServiceProvider: ApiServiceProvider;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ DirectoryPage, SearchPipeMock, UserCardComponentMock ],
        providers: [
          { provide: NavController, useClass: NavMock },
          { provide: NavParams, useClass: NavParamsMock },
          { provide: ApiServiceProvider, useClass: ApiServiceProviderMock }
        ],
        schemas: [ NO_ERRORS_SCHEMA ]
      });
      fixture = TestBed.createComponent(DirectoryPage);
      component = fixture.componentInstance;
      apiServiceProvider = fixture.debugElement.injector.get(ApiServiceProvider);
    }));

    it('should be created', () => {
      expect(component).toBeDefined();
    });

    it('should have as many User Cards as users', async(() => {
      let mockUsers: User[] = [
        new User('1', '', ''),
        new User('2', '', ''),
        new User('3', '', '')
      ];
      spyOn(apiServiceProvider, 'getUsers').and.returnValue(Promise.resolve(mockUsers))
      fixture.whenStable().then(() => {
        let userCards = fixture.debugElement.queryAll(By.css('user-card'));
        expect(userCards.length).toEqual(mockUsers.length);
      });
    }));
});

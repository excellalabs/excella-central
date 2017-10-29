import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
  inject,
  async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, Platform, NavController, NavParams } from 'ionic-angular';
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
        imports: [
          IonicModule.forRoot(DirectoryPage)
        ],
        providers: [
          { provide: ComponentFixtureAutoDetect, useValue: true },
          { provide: NavController, useClass: NavMock },
          { provide: NavParams, useClass: NavParamsMock },
          { provide: ApiServiceProvider, useClass: ApiServiceProviderMock }
        ]
      });
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(DirectoryPage);
      component = fixture.componentInstance;
    });

    it('should be created', () => {
      expect(component).toBeDefined();
    });

    it('should have as many User Cards as users', async(() => {
      let apiServiceProvider = fixture.debugElement.injector.get(ApiServiceProvider);
      let mockUsers: User[] = [
        new User('1', '', ''),
        new User('2', '', ''),
        new User('3', '', '')
      ];
      spyOn(apiServiceProvider, 'getUsers').and.returnValue(Promise.resolve(mockUsers))
      component.ionViewDidLoad();
      component.users.then((users) => {
        let userCards = fixture.debugElement.queryAll(By.css('user-card'));
        expect(userCards.length).toEqual(users.length);
      });
    }));
});

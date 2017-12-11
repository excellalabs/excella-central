import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import {
  NavMock,
  NavParamsMock,
  SearchPipeMock,
  ProfileServiceMock
} from '../../../test-config/mocks-ionic';
import { DirectoryPage } from './directory';
import { ProfileService } from '../../providers/profile.service/profile.service';

describe('DirectoryPage', () => {
  let fixture: ComponentFixture<DirectoryPage>;
  let component: DirectoryPage;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DirectoryPage, SearchPipeMock],
        imports: [IonicModule.forRoot(DirectoryPage)],
        providers: [
          { provide: NavController, useClass: NavMock },
          { provide: NavParams, useClass: NavParamsMock },
          {
            provide: ProfileService,
            useClass: ProfileServiceMock
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

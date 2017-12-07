import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import {
  NavMock,
  NavParamsMock,
  ApiServiceProviderMock
} from '../../../test-config/mocks-ionic';
import { DirectoryDetailPage } from './directory-detail';
import { ProfileServiceProvider } from '../../providers/profile.service/profile.service';

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
          { provide: ProfileServiceProvider, useClass: ApiServiceProviderMock }
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

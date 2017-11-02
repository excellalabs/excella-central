import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import {
  NavMock,
  NavParamsMock,
  SearchPipeMock,
  ProfileCardComponentMock,
  ApiServiceProviderMock
} from '../../../test-config/mocks-ionic';
import { DirectoryDetailPage } from './directory-detail';
import { ApiServiceProvider } from '../../providers/api.service/api.service';

describe('DirectoryDetailPage', () => {
    let fixture: ComponentFixture<DirectoryDetailPage>;
    let component: DirectoryDetailPage;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ DirectoryDetailPage, SearchPipeMock, ProfileCardComponentMock ],
          imports: [
            IonicModule.forRoot(DirectoryDetailPage)
          ],
          providers: [
            { provide: NavController, useClass: NavMock },
            { provide: NavParams, useClass: NavParamsMock },
            { provide: ApiServiceProvider, useClass: ApiServiceProviderMock }
          ]
        });
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(DirectoryDetailPage);
        component = fixture.componentInstance;
      });

      it('should be created', () => {
        expect(component).toBeDefined();
      });
});

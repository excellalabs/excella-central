import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import {
  NavMock,
  NavParamsMock,
  SearchPipeMock,
  ApiServiceProviderMock
} from '../../../test-config/mocks-ionic';
import { DirectoryPage } from './directory';
import { ApiServiceProvider } from '../../providers/api.service/api.service';

describe('DirectoryPage', () => {
    let fixture: ComponentFixture<DirectoryPage>;
    let component: DirectoryPage;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ DirectoryPage, SearchPipeMock ],
          imports: [
            IonicModule.forRoot(DirectoryPage)
          ],
          providers: [
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
});

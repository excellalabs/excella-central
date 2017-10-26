import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, NavController, NavParams} from 'ionic-angular';
import { NavMock, NavParamsMock } from '../../../test-config/mocks-ionic';
import { DirectoryPage } from './directory';

describe('DirectoryPage', () => {
    let fixture: ComponentFixture<DirectoryPage>;
    let component: DirectoryPage;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [DirectoryPage],
          imports: [
            IonicModule.forRoot(DirectoryPage)
          ],
          providers: [
            { provide: NavController, useClass: NavMock},
            { provide: NavParams, useClass: NavParamsMock}
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
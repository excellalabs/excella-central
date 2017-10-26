import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule, Platform, NavController, NavParams} from 'ionic-angular';
import { NavMock, NavParamsMock, SearchPipeMock, EmployeeCardComponentMock } from '../../../test-config/mocks-ionic';
import { DirectoryPage } from './directory';
import { SearchPipe } from '../../pipes/search/search';

describe('DirectoryPage', () => {
    let fixture: ComponentFixture<DirectoryPage>;
    let component: DirectoryPage;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [DirectoryPage, SearchPipeMock, EmployeeCardComponentMock],
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

      it('should have as many Employee Cards as employees', () => {
        fixture.detectChanges();
        let employeeCards = fixture.debugElement.queryAll(By.css('employee-card'));
        expect(employeeCards.length).toEqual(component.employees.length);
      })
});
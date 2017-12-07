import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import {
  NavMock,
  NavParamsMock,
  SearchPipeMock
} from '../../../test-config/mocks-ionic';
import { FaceoffPage } from './faceoff';

describe('DirectoryPage', () => {
  let fixture: ComponentFixture<FaceoffPage>;
  let component: FaceoffPage;
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FaceoffPage, SearchPipeMock],
        imports: [IonicModule.forRoot(FaceoffPage)],
        providers: [
          { provide: NavController, useClass: NavMock },
          { provide: NavParams, useClass: NavParamsMock }
        ]
      });
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceoffPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import {
  NavMock,
  NavParamsMock,
  SearchPipeMock,
  ProfileServiceMock
} from '../../../test-config/mocks-ionic';
import { FaceoffPage } from './faceoff';
import { ProfileService } from '../../providers/profile.service/profile.service';

describe('FaceoffPage', () => {
  let fixture: ComponentFixture<FaceoffPage>;
  let component: FaceoffPage;
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FaceoffPage, SearchPipeMock],
        imports: [IonicModule.forRoot(FaceoffPage)],
        providers: [
          { provide: NavController, useClass: NavMock },
          { provide: NavParams, useClass: NavParamsMock },
          {
            provide: ProfileService,
            useClass: ProfileServiceMock
          }
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

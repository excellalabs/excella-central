import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import { By } from '@angular/platform-browser';
import { NavMock, NavParamsMock } from '../../../test-config/mocks-ionic';
import { LandingPage } from './landing';

describe('LandingPage', () => {
  let fixture: ComponentFixture<LandingPage>;
  let component: LandingPage;
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LandingPage],
        imports: [IonicModule.forRoot(LandingPage)],
        providers: [
          { provide: NavController, useClass: NavMock },
          { provide: NavParams, useClass: NavParamsMock }
        ]
      });
      fixture = TestBed.createComponent(LandingPage);
      component = fixture.componentInstance;
    })
  );

  it('should be created', () => {
    expect(component).toBeDefined();
  });
});

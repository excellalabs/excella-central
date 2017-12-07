import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicModule, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock,
  ApiServiceProviderMock,
  StorageMock
} from '../../test-config/mocks-ionic';
import { ApiServiceProvider } from '../providers/api.service/api.service';

describe('MyApp Component', () => {
  let fixture: ComponentFixture<MyApp>;
  let component: MyApp;
  let storage: Storage;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MyApp],
        imports: [IonicModule.forRoot(MyApp), IonicStorageModule.forRoot()],
        providers: [
          { provide: StatusBar, useClass: StatusBarMock },
          { provide: SplashScreen, useClass: SplashScreenMock },
          { provide: Platform, useClass: PlatformMock },
          { provide: ApiServiceProvider, useClass: ApiServiceProviderMock },
          { provide: Storage, useClass: StorageMock }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      });
      fixture = TestBed.createComponent(MyApp);
      component = fixture.componentInstance;
      storage = fixture.debugElement.injector.get(Storage);
    })
  );

  it('should be created', () => {
    loadHomePageMock(storage);
    expect(component instanceof MyApp).toBe(true);
  });

  it('should have three pages', () => {
    loadHomePageMock(storage);
    expect(component.pages.length).toBe(3);
  });
});

export function loadLandingPageMock(storage: Storage) {
  return spyOn(storage, 'get').and.returnValue(Promise.resolve(true));
}

export function loadHomePageMock(storage: Storage) {
  return spyOn(storage, 'get').and.returnValue(Promise.resolve(false));
}

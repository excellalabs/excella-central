import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import {
  NavMock,
  NavParamsMock,
  AccountServiceMock,
  StorageMock,
  ProfileServiceMock,
  PictureUploadServiceMock,
  AlertControllerMock
} from '../../../test-config/mocks-ionic';
import { HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage/es2015/storage';
import { AccountService } from '../../providers/account.service/account.service';
import { PictureUploadService } from '../../providers/picture-upload.service/picture-upload.service';
import { PictureUploadPage } from './picture-upload';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

describe('PictureUploadPage', () => {
  let fixture: ComponentFixture<PictureUploadPage>;
  let component: PictureUploadPage;
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PictureUploadPage],
        imports: [IonicModule.forRoot(PictureUploadPage)],
        providers: [
          { provide: NavController, useClass: NavMock },
          { provide: NavParams, useClass: NavParamsMock },
          { provide: Storage, useClass: StorageMock },
          { provide: AlertController, useClass: AlertControllerMock },
          { provide: AccountService, useClass: AccountServiceMock },
          { provide: PictureUploadService, useClass: PictureUploadServiceMock }
        ]
      });
      fixture = TestBed.createComponent(PictureUploadPage);
      component = fixture.componentInstance;
    })
  );

  it('should be created', () => {
    expect(component).toBeDefined();
  });
});

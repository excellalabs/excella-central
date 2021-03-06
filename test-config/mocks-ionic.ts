import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Pipe, PipeTransform } from '@angular/core';
import { Profile } from '../src/models/profile/profile';
import { RequestOptions } from 'https';

export class PlatformMock {
  public ready(): Promise<string> {
    return new Promise(resolve => {
      resolve('READY');
    });
  }

  public getQueryParam() {
    return true;
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    return () => true;
  }

  public hasFocus(ele: HTMLElement): boolean {
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    return {
      paddingLeft: '10',
      paddingTop: '10',
      paddingRight: '10',
      paddingBottom: '10'
    };
  }

  public onResize(callback: any) {
    return callback;
  }

  public registerListener(
    ele: any,
    eventName: string,
    callback: any
  ): Function {
    return () => true;
  }

  public win(): Window {
    return window;
  }

  public raf(callback: any): number {
    return 1;
  }

  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }

  public cancelTimeout(id: any) {
    // do nothing
  }

  public getActiveElement(): any {
    return document['activeElement'];
  }
}

export class StatusBarMock extends StatusBar {
  styleDefault() {
    return;
  }
}

export class SplashScreenMock extends SplashScreen {
  hide() {
    return;
  }
}

export class NavMock {
  public pop(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public push(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public getActive(): any {
    return {
      instance: {
        model: 'something'
      }
    };
  }

  public setRoot(): any {
    return true;
  }

  public registerChildNav(nav: any): void {
    return;
  }
}

export class NavParamsMock {
  data = {};

  get(param) {
    return this.data[param];
  }
}

@Pipe({ name: 'search' })
export class SearchPipeMock implements PipeTransform {
  transform(value: number): number {
    return value;
  }
}

export class ProfileServiceMock {
  async getProfiles() {
    return new Promise<Profile[]>((resolve, reject) => {});
  }

  async getProfilesWithPhotos(): Promise<Profile[]> {
    return new Promise<Profile[]>((resolve, reject) => {});
  }

  async getProfilesWithinLimit(
    limit: number,
    skip: number
  ): Promise<Profile[]> {
    return new Promise<Profile[]>((resolve, reject) => {});
  }
}

export class AccountServiceMock {
  login(email: string, password: string) {
    return new Promise<Profile[]>((resolve, reject) => {});
  }

  logout() {
    return new Promise<Profile[]>((resolve, reject) => {});
  }

  register(email: string, password: string) {
    return new Promise<Profile[]>((resolve, reject) => {});
  }
}

export class AuthenticationServiceMock {
  buildAuthenticationService() {
    return new Promise<RequestOptions>((resolve, reject) => {});
  }

  getUserToken() {
    return new Promise<string>((resolve, reject) => {});
  }

  storeUserToken(data) {}

  clearUserToken() {}
}

export class StorageMock {
  get(param) {
    new Promise((resolve, reject) => {});
  }
}

export class AlertControllerMock {
  create(param) {
    return;
  }
}

export class LoadingControllerMock {
  create() {
    return;
  }
}

export class PictureUploadServiceMock {}

export class DeepLinkerMock {}

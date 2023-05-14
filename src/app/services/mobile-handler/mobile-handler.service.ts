import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class MobileHandlerService {
  public isMobile$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private resizeEvent: any;

  constructor() {}

  initMobileHandler(): void {
    this.resizeEvent = addEventListener('resize', () => {
      this.mobileHandler();
    });
  }

  mobileHandler() {
    let width = window.innerWidth;
    if (width < 768) {
      this.isMobile$.next(true);
    } else {
      this.isMobile$.next(false);
    }
  }
}

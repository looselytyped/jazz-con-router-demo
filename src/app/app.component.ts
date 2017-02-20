import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Resolve,
  ResolveData
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;

  constructor(private router: Router) {
    router.events.subscribe((e: Event) => {
      this.navigationInterceptor(e);
    });
  }

  navigationInterceptor(event: Event): void {
    this.loading = this.isStart(event) ? true : false;
  }

  isStart(event: Event): boolean {
    return event instanceof NavigationStart;
  }

  isEnd(event: Event): boolean {
    return (event instanceof NavigationEnd)
      || (event instanceof NavigationCancel)
      || (event instanceof NavigationError);
  }
}

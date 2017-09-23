import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  RoutesRecognized,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Resolve,
  ResolveData,
  ActivatedRoute
} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/share';

const printer = (root: any) => {
  const ret = {
    component: root.component ? root.component.name : '',
    url: root.url.value,
    data: root.data.value,
    params: root.params.value,
    outlet: root.outlet,
  }
  const children = root.children.map(printer);
  ret['children'] = children;
  return ret;
}

var cache = [];
const replacer = (key, value) => {
  if (typeof value === 'object' && value !== null) {
    if (cache.indexOf(value) !== -1) {
      // Circular reference found, discard key
      return;
    }
    // Store value in our collection
    cache.push(value);
  }
  return value;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loading = false;
  titleSub: Subscription;
  navigationSub: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) { }

  navigationInterceptor(event: Event): void {
    if (this.isStart(event)) {
      this.loading = true;
    } else if (this.isEnd(event)) {
      this.loading = false;
    }
  }

  isStart(event: Event): boolean {
    return event instanceof NavigationStart;
  }

  isEnd(event: Event): boolean {
    return (event instanceof NavigationEnd)
      || (event instanceof NavigationCancel)
      || (event instanceof NavigationError);
  }

  ngOnInit() {
    // need multiple listeners
    var sub = this.router.events.share();
    // set title
    this.titleSub = sub.filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((data) => this.titleService.setTitle(data['title']));

    // display
    this.navigationSub = sub.subscribe((e: Event) => {
      // console.log(`###### ${e} ######`)
      // console.log(JSON.stringify(printer(this.activatedRoute.root), replacer, 2));
      // console.log("###### ------- ######")
      this.navigationInterceptor(e);
    });
  }
  ngOnDestroy() {
    this.titleSub.unsubscribe();
    this.navigationSub.unsubscribe();
  }
}

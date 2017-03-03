import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/delay';

@Injectable()
export class ClassesResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return Observable.of({
      msg: "Data!!"
    }).delay(3000);
  }
}

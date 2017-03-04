import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class ClassesResolver implements Resolve<any> {
  resolve(): Observable<any> {
    return Observable.of({
      msg: "Data!!"
    }).delay(3000);
  }
}

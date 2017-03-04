import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Class } from './class.interface';

const BASE_URL = 'http://localhost:3200/';

@Injectable()
export class RepoService {

  constructor(private http: Http) { }

  getClasses(): Observable<Array<Class>> {
    return this.http.get(`${BASE_URL}classes`)
      .map(res => res.json());
  }

}

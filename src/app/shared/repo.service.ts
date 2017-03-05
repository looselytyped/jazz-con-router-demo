import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {
  Class,
  Description
} from './../shared';

const BASE_URL = 'http://localhost:3200';

@Injectable()
export class RepoService {

  constructor(private http: Http) { }

  getClasses(): Observable<Array<Class>> {
    return this.http.get(`${BASE_URL}/classes`)
      .map(res => res.json());
  }

  getClass(id: number): Observable<Class> {
    return this.http.get(`${BASE_URL}/classes/${id}`)
      .map(res => res.json());
  }

  getDescriptions(id: number): Observable<Array<Description>> {
    return this.http.get(`${BASE_URL}/descriptions`)
      .map(r => r.json())
      .map(x => {
        return x.filter(n => n['class_id'] == id);
      });
  }
}

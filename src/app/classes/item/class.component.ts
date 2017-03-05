import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RepoService, Class } from './../../shared';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/pluck';

@Component({
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  class: Observable<Class>;
  constructor(private route: ActivatedRoute) {
    this.class = route.data.pluck('class');
  }

  ngOnInit() {
  }

}

import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepoService, Class } from '../../shared';

@Component({
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
@Injectable()
export class ClassesComponent implements OnInit {
  classes: Array<Class>;

  constructor(r: ActivatedRoute, private svc: RepoService) {
    r.data.subscribe((d) => {
      // console.log('data->', d);
    });
  }

  ngOnInit() {
    this.svc.getClasses().subscribe((classes) => this.classes = classes);
  }

}

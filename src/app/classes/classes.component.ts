import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor(r: ActivatedRoute) {
    r.data.subscribe((d) => {
      console.log('data->', d);
    });
  }

  ngOnInit() {
  }

}

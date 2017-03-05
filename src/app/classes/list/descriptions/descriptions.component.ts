import { Component, OnInit } from '@angular/core';
import { Description } from './../../../shared';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.css']
})
export class DescriptionsComponent implements OnInit {
  descriptions: Observable<Array<Description>>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.descriptions = this.route.data.pluck('descriptions');
  }

}

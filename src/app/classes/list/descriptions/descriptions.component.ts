import { Component, OnInit } from '@angular/core';
import { Description } from './../../../shared';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

const printer = (root) => {
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
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.css']
})
export class DescriptionsComponent implements OnInit {
  descriptions: Observable<Array<Description>>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(JSON.stringify(printer(this.route.root), replacer, 2));
    this.descriptions = this.route.data.pluck('descriptions');
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { IndexEnum } from '../models/index-enum.model';

@Component({
  selector: 'app-array-element',
  templateUrl: './array-element.component.html',
  styleUrls: ['./array-element.component.css']
})
export class ArrayElementComponent implements OnInit {
  @Input() elementValue: number;
  @Input() elementIndex: number;
  @Input() set indexEnum(value : IndexEnum) {
    switch(value) {
      case IndexEnum.i:
        this.elementClass = 'elementContainer element iIndexAtPosition';
        break;
      case IndexEnum.j:
        this.elementClass = 'elementContainer element jIndexAtPosition';
        break;
      case IndexEnum.k:
        this.elementClass = 'elementContainer element kIndexAtPosition';
        break;
      default:
        this.elementClass = 'elementContainer element staticElement';
        break;
    }
  }

  public elementClass: string = 'elementContainer element staticElement';

  constructor() { }

  ngOnInit(): void { }

}

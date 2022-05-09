import { Component, OnInit } from '@angular/core';
import { IndexEnum } from './models/index-enum.model';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  public arrayElements: number[] = [ 6, 5, 4, 3, 2, 1];
  public iIndex: number = 1;
  public jIndex: number = 2;
  public kIndex: number = 3;

  constructor() { }

  ngOnInit(): void { }

  public getIndexEnum(currentElement: number): IndexEnum {
    if (currentElement == this.iIndex) {
      return IndexEnum.i;
    } else if (currentElement == this.jIndex) {
      return IndexEnum.j;
    } else if (currentElement == this.kIndex) {
      return IndexEnum.k;
    }else {
      return IndexEnum.init;
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-visualization',
  templateUrl: './code-visualization.component.html',
  styleUrls: ['./code-visualization.component.css']
})
export class CodeVisualizationComponent implements OnInit {
  public pythonCode: string;

  constructor() { }

  ngOnInit(): void { }

  public alertText() {
    window.alert(this.pythonCode);
  }
}

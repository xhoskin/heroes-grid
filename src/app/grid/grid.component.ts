import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  x = 15;
  y = 10;

  cols = Array.from(Array(this.x).keys());
  rows = Array.from(Array(this.y).keys());

  constructor() { }

  ngOnInit() {
  }
  
}

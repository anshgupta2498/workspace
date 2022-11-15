import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  
  gridSize:number = 4;

  ngOnInit(): void {
  }

  changeGridSize(e: any){
    console.log(e)
    this.gridSize = +e.target.value;
  }

}

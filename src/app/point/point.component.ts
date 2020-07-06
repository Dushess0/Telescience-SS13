import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {

  @Input() x_label:string;
  @Input() y_label:string;

  x:number;
  y:number;

  


  constructor() { }

  ngOnInit(): void {
  }

}

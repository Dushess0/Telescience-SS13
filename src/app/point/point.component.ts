import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {

  @Input() x_label:string;
  @Input() y_label:string;


  point={x:0,y:0};

  @Output() cordsChange = new EventEmitter();
  @Input()
  get cords()
  {
     return this.point;
  }
   set cords(value)
   {
     this.point=value;
     this.cordsChange.emit(this.cords);
   }

  constructor() { }



  ngOnInit(): void {
  }

}

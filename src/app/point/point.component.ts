import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {

  @Input() x_label: string;
  @Input() y_label: string;


  point = { x: 0, y: 0 };

  @Output() cordsChange = new EventEmitter();
  @Input()
  get cords() {
    return this.point;
  }
  set cords(value) {
    this.point = value;
    this.cordsChange.emit(this.cords);
  }

  constructor() { }

  enterRaw() {
    let raw: string = prompt("Enter coordinated like Any(x,y,z)").replace(/\s/g, "");;

    let reg = /\((\d*),(\d*),\d*\)/i;
    let res = reg.exec(raw);
    if (res && res.length == 3) {
      this.cords = { x: Number.parseInt(res[1]), y: Number.parseInt(res[2]) };
    }

    else {
      this.cords = { x: Number.parseInt(/x=\d*/.exec(raw)[0].substr(2)), y: Number.parseInt(/y=\d*/.exec(raw)[0].substr(2)) }
    }
  }


  ngOnInit(): void {
  }

}

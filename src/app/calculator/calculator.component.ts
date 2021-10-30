import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ErrorService } from "../error.service";
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})



export class CalculatorComponent implements OnInit {



  Start = { x: NaN, y: NaN };
  End = { x: NaN, y: NaN };
  Telepad = { x: NaN, y: NaN };

  isElevation: Boolean = true;
  Elevation1: number = 45;
  Elevation2: number = 50;

  Power1: number = 25;
  Power2: number = 30;

  Bearing: number = 0;

  hasResult: Boolean = false;
  deltaPower: number;
  deltaBearing: number;
  deltaElevation: number;

  errorservice: ErrorService;


  @Output() onCalculated = new EventEmitter<Record<string, number>>();

  constructor(errorservice: ErrorService) {
    this.errorservice = errorservice; this.errorservice.holopadUpdated$.subscribe(arg => {

      this.Telepad.x = arg[0];
      this.Telepad.y = arg[1];


    }
    );
  }

  ngOnInit(): void {

    fromEvent(document, 'click').subscribe(() => this.errorservice.SetTelepad(this.Telepad.x, this.Telepad.y));
  }



  calculateErrors() {
    let delta1 = {
      x: this.Start.x - this.Telepad.x,
      y: this.Start.y - this.Telepad.y,
    };
    let delta2 = {
      x: this.End.x - this.Telepad.x,
      y: this.End.y - this.Telepad.y,
    };

    let D1 = Math.hypot(delta1.x, delta1.y);
    let D2 = Math.hypot(delta2.x, delta2.y);

    let bearing1 = Math.atan2(delta1.x, delta1.y) * 180 / Math.PI;
    let bearing2 = Math.atan2(delta2.x, delta2.y) * 180 / Math.PI;
    this.deltaBearing = -Math.round((2 * this.Bearing - bearing1 - bearing2) / 2); //average
    if (this.isElevation) {
      this.deltaElevation = Math.ceil(
        90 / Math.PI * Math.atan(
          (D2 * Math.sin(Math.PI / 90 * this.Elevation1) - D1 * Math.sin(Math.PI / 90 * this.Elevation2)) / ///* fix vim highlighting here
          (D1 * Math.cos(Math.PI / 90 * this.Elevation2) - D2 * Math.cos(Math.PI / 90 * this.Elevation1))
        )
      );

      let p1 = Math.sqrt(10 * D1 / Math.sin(Math.PI / 90 * (this.Elevation1 + this.deltaElevation)));
      let p2 = Math.sqrt(10 * D2 / Math.sin(Math.PI / 90 * (this.Elevation2 + this.deltaElevation)));
      this.deltaPower = -Math.round((2 * this.Power1 - p1 - p2) / 2);
    }
    else {
      this.deltaPower = this.clamp(Math.round((Math.sqrt(D2) * this.Power1 - Math.sqrt(D1) * this.Power2) / (Math.sqrt(D1) - Math.sqrt(D2))), -4, 0);

      let elev1 = Math.asin(10 * D1 / (this.Power1 + this.deltaPower) ** 2) * 90 / Math.PI;
      let elev2 = Math.asin(10 * D2 / (this.Power2 + this.deltaPower) ** 2) * 90 / Math.PI;

      if (Number.isNaN(this.Elevation1)) {
        this.deltaElevation = -Math.round(this.Elevation1 - elev2);
      } else if (Number.isNaN(this.Elevation2)) {
        this.deltaElevation = -Math.round(this.Elevation1 - elev1);
      } else {
        this.deltaElevation = -Math.round((2 * this.Elevation1 - elev1 - elev2) / 2);
      }
    }


    this.errorservice.ErrorsCalculated({ power: this.deltaPower, elevation: this.deltaElevation, bearing: this.deltaBearing, tele_x: this.Telepad.x, tele_y: this.Telepad.y });
    this.hasResult = true;
  }
  clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  loadTelepad(x: number, y: number) {
    this.Telepad.x = x;
    this.Telepad.y = y;
  }
  calculateErrorsv() {

  }

}

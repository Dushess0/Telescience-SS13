import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-triangulator',
  templateUrl: './triangulator.component.html',
  styleUrls: ['./triangulator.component.scss']
})
export class TriangulatorComponent implements OnInit {

  telepad = { x: NaN, y: NaN };


  targetPower: number = NaN;
  targetBearing: number = NaN;
  targeElevation: number = NaN;
  hasResult: Boolean = false;

  errorService: ErrorService;
  Errors = { power: NaN, bearing: NaN, elevation: NaN }
  TargetPos = { x: NaN, y: NaN };


  constructor(errorService: ErrorService) {
    this.errorService = errorService;
    errorService.readyToPaste$
      .subscribe(arg => {

        this.Errors = { power: arg["power"], bearing: arg["bearing"], elevation: arg["elevation"] }

        this.telepad.x = arg["tele_x"];
        this.telepad.y = arg["tele_y"];

      }
      );
    errorService.holopadUpdated$
      .subscribe(arg => {

        this.telepad.x = arg[0];
        this.telepad.y = arg[1];
      }
      );
    errorService.blindEvent
      .subscribe(arg => {

        this.Errors.bearing = 0;
        this.Errors.elevation = 0;
        this.Errors.power = -2;
      }
      );


  }

  SaveCords() {
    this.errorService.SaveCords({ bearing: this.targetBearing, elevation: this.targeElevation, power: this.targetPower });
  }

  Triangulate(target: Record<string, number>, telepad: Record<string, number>, error: Record<string, number>) {

    const POWERS = [5, 10, 20, 25, 30, 40, 50, 80, 100];
    let distance = Math.hypot(target.x - telepad.x, target.y - telepad.y);

    var bearing = 180.0 * Math.atan2(target.y - telepad.y, target.x - telepad.x) / Math.PI;
    bearing = parseFloat((90 - bearing).toFixed(2));
    bearing = bearing < 0 ? bearing+ 360 : bearing;
    let result_bearing = bearing - error.bearing;
    let num6 = error.elevation < 0 ? 1 : 45;
    let num7 = error.elevation < 0 ? 45 : 90;
    let RESULT= {
      bearing: NaN,
      elevation: NaN,
      power: NaN
      
    }
    
    POWERS.forEach(power => {
      let list: Array<number> = new Array();
      let correctedPower = power + error.power;
      let found = false;
      for (let i = num6; i <= num7; i += 0.1) {

        if (this.check(bearing, i, correctedPower, target.x - telepad.x, target.y - telepad.y)) {
          list.push(i);
          found = true;
        }
      }
      if (found) {
        list.forEach(elevation => {
          let num11 = elevation;
          num6 += num11;
        });
        RESULT.bearing = result_bearing;
        RESULT.elevation =  (Math.round(num6) / list.length) - error.elevation
        RESULT.power = power;
        return RESULT;
      }
    });


    return RESULT;
  }
  BeginTriangulation(): void {

    var target = Object.create(this.TargetPos);

    var result = this.Triangulate(target, this.telepad, this.Errors);
    this.targeElevation = result["elevation"];
    this.targetPower = result["power"];
    this.targetBearing = result["bearing"];
    this.hasResult = true;


  }

  ngOnInit(): void {
  }
  check(bearing: number, elevation: number, power: number, x: number, y: number): boolean {
    let num = power * power / 10 * Math.sin(Math.PI * elevation / 90);
    let possibleX = Math.round(num * Math.sin(Math.PI * bearing / 180));
    let possibleY = Math.round(num * Math.cos(Math.PI * bearing / 180));

    return (possibleX == x) && (possibleY == y);
  }

}

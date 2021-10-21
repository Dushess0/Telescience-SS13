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

  Triangulate(target: Record<string, number>, telepad: Record<string, number>, error: Record<string, number>, recurse: Boolean) {

    const POWERS = [5, 10, 20, 25, 30, 40, 50, 80, 100];
    target.x -= telepad.x;
    target.y -= telepad.y;
    let distance = Math.hypot(target.x, target.y);

    //calculate minimum power for minimal electricity losses
    for (let P of POWERS) {
      let elevation = 90 / Math.PI * Math.asin(10 * distance / (P + error.power) ** 2);
      let trueElevation = elevation - error.elevation;
      let invElevation = 90 - elevation - error.elevation;
      let bearing = 180 / Math.PI * Math.atan2(target.x, target.y) + error.bearing;
      bearing = bearing < 0 ? bearing + 360 : bearing;
      let trueGood = (trueElevation > 0 && trueElevation < 90);
      let invGood = (invElevation > 0 && invElevation < 90);
      if (!Number.isNaN(elevation) && (trueGood || invGood)) {
        let hit = {
          bearing: bearing,
          elevation: trueGood ? trueElevation : invElevation,
          power: P
        };

        let miss = this.visit(hit, this.telepad, error);
        if (!recurse)
          return hit;
        target.x = (target.x + this.telepad.x) - (miss.x - target.x - this.telepad.x);
        target.y = (target.y + this.telepad.y) - (miss.y - target.y - this.telepad.y);
        return this.Triangulate(target, this.telepad, error, false);
      }
    }

    return {
      bearing: NaN,
      elevation: NaN,
      power: NaN
    };
  }
  BeginTriangulation(): void {

    var target = Object.create(this.TargetPos);

    var result = this.Triangulate(target, this.telepad, this.Errors, true);
    this.targeElevation = result["elevation"];
    this.targetPower = result["power"];
    this.targetBearing = result["bearing"];
    this.hasResult = true;


  }


  visit(target, telepad, error) {
    let rotation = target.bearing + error.bearing;
    let angle = this.clamp(target.elevation + error.elevation, 1, 90);
    let power = this.clamp(target.power + error.power, 1, 1000);

    let distance = 0.1 * power ** 2 * Math.sin(angle * Math.PI / 90)

    let targetX = Math.round(telepad.x + distance * Math.sin(rotation * Math.PI / 180));
    let targetY = Math.round(telepad.y + distance * Math.cos(rotation * Math.PI / 180));

    return {
      x: targetX,
      y: targetY
    };
  }

  clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  ngOnInit(): void {
  }

}

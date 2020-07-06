import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})



export class CalculatorComponent implements OnInit {

 
  isElevation:Boolean=true;
  Elevation1:number=45;
  Elevation2:number=50;

  Power1:number=25;
  Power2:number=30;
  
  Bearing:number=0;
  
  hasResult:Boolean=false;
  deltaPower:number;
  deltaBearing:number;
  deltaElevation:number;
 

  constructor() { }

  ngOnInit(): void {
  }

  calculateErrors()
  {
    
     

     this.hasResult=true;
  }

}

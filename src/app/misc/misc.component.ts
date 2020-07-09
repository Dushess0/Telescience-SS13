import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {
   errorSerivce:ErrorService;
   save_iterator=0;
   savedCords: {label:string,id:number,bearing: string,elevation: string,power: string}[] = [];


  constructor(errorService:ErrorService, private cdr:ChangeDetectorRef ) { 
      this.errorSerivce=errorService;
      errorService.saveEvent
      .subscribe(arg => {
         let label=window.prompt("Enter label","Saved Pos");
         this.savedCords.push({label:label,id:this.save_iterator,
          bearing: arg.bearing.toFixed(2),
          elevation: arg.elevation.toFixed(2),
          power: arg.power.toFixed(2)});
          cdr.detectChanges();
          
      }
      );


  }
  ngOnInit(): void {
  }

  loadTelepad(x:number,y:number)
  { 
  
     this.errorSerivce.SetTelepad(x,y);
  }
  BlindMode()
  {
     this.errorSerivce.BlindMode();
  }

}

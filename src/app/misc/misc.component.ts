import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {
  errorSerivce:ErrorService;
  constructor(errorService:ErrorService) { 
      this.errorSerivce=errorService;



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

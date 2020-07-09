import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {


  private errorSource= new Subject<Record<string,number>>();
  private holopadSource= new Subject<Array<number>>();
  private blindSource= new Subject<void>();
  private saveSource=new Subject<{bearing:number,elevation:number,power:number}>();
  saveEvent= this.saveSource.asObservable();
  blindEvent = this.blindSource.asObservable();
  readyToPaste$= this.errorSource.asObservable();
  holopadUpdated$=this.holopadSource.asObservable();


  public ErrorsCalculated(res: Record<string,number>)
  {
    
      this.errorSource.next(res);
  }

  public SaveCords(cords:{bearing:number,elevation:number,power:number})
  {
    this.saveSource.next(cords);
  }
  public SetTelepad(x:number,y:number)
  {
     this.holopadSource.next([x,y]);
  }
  public BlindMode()
  {
    this.blindSource.next();
  }


  constructor() { }
}

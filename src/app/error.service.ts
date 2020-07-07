import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {


  private errorSource= new Subject<Record<string,number>>();
  private holopadSource= new Subject<Array<number>>();
  readyToPaste$= this.errorSource.asObservable();
  holopadUpdated$=this.holopadSource.asObservable();


  public ErrorsCalculated(res: Record<string,number>)
  {
    
      this.errorSource.next(res);
  }

  public SetTelepad(x:number,y:number)
  {
     this.holopadSource.next([x,y]);
  }


  constructor() { }
}

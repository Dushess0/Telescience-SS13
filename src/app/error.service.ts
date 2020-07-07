import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {


  private errorSource= new Subject<Record<string,number>>();


  readyToPaste$= this.errorSource.asObservable();

  public ErrorsCalculated(res: Record<string,number>)
  {
      this.errorSource.next(res);
  }

  constructor() { }
}

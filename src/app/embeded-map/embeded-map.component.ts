import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-embeded-map',
  templateUrl: './embeded-map.component.html',
  styleUrls: ['./embeded-map.component.scss']
})
export class EmbededMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    fromEvent(document, 'click').subscribe(() =>this.click());
  }

  click()
  {
    console.log("test");
  }
}

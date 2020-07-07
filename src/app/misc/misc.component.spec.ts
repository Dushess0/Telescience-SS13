import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscComponent } from './misc.component';
import { CalculatorComponent } from '../calculator/calculator.component';

describe('MiscComponent', () => {
  let component: MiscComponent;
  let com:CalculatorComponent
  let fixture: ComponentFixture<MiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscComponent,CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscComponent);
    component = fixture.componentInstance;
    var tmp=TestBed.createComponent(CalculatorComponent)
    com=tmp.componentInstance;
    tmp.detectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('loading telepad position',()=>
  {
    component.loadTelepad(222,222);
    expect(com.Telepad.x==222&&com.Telepad.y==222).toBeTruthy();
    component.loadTelepad(5,10);
    expect(com.Telepad.x==1&&com.Telepad.y==222).toBeFalsy();
    
  })
  


});

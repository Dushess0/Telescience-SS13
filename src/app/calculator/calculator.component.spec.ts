import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Power error test case 1',()=>
  {
    component.Elevation1=5;
    component.End={x:215,y:240};
    component.Start={x:190,y:155};
    component.Power1=25;
    component.Power2=30;
    component.isElevation=false;
    component.Telepad={x:177,y:30};
    component.Bearing=0;
    component.calculateErrors();
    expect(component.deltaBearing).toEqual(8);
    expect(component.deltaPower).toEqual(-4);

  });

  it('Elevation error test case 1',()=>
  {
    component.isElevation=true;
    component.Telepad={x:177,y:30};
    component.Start={x:190,y:155};
    component.End={x:215,y:240};
    component.Power1=25;
    component.Power2=30;
    component.Elevation1=45;
    component.Elevation2=50;
    
  

    component.calculateErrors();
    expect(component.deltaBearing).toEqual(8);
    expect(component.deltaPower).toEqual(47);
    expect(component.deltaElevation).toEqual(-38);

  });



});

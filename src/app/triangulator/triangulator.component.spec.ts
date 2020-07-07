import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangulatorComponent } from './triangulator.component';

describe('TriangulatorComponent', () => {
  let component: TriangulatorComponent;
  let fixture: ComponentFixture<TriangulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriangulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Triangulation (elevation)',()=>
  {
    component.Errors={bearing:8,elevation:-38,power:47}
    component.TargetPos={x:50,y:50}; 
    component.telepad={x:177,y:30};


    component.BeginTriangulation();
    
    expect(component.targetBearing).toBeCloseTo(272.17,2);
    expect(component.targeElevation).toBeCloseTo(53.31,2);
    expect(component.targetPower).toBeCloseTo(5.00,2);
     

   

  });



});

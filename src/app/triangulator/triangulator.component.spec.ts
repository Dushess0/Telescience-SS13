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
});

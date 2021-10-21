import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbededMapComponent } from './embeded-map.component';

describe('EmbededMapComponent', () => {
  let component: EmbededMapComponent;
  let fixture: ComponentFixture<EmbededMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbededMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbededMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

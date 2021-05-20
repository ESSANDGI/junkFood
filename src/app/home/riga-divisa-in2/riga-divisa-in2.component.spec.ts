import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigaDivisaIn2Component } from './riga-divisa-in2.component';

describe('RigaDivisaIn2Component', () => {
  let component: RigaDivisaIn2Component;
  let fixture: ComponentFixture<RigaDivisaIn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RigaDivisaIn2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RigaDivisaIn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

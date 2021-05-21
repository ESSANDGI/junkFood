import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimoSloganComponent } from './primo-slogan.component';

describe('PrimoSloganComponent', () => {
  let component: PrimoSloganComponent;
  let fixture: ComponentFixture<PrimoSloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimoSloganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimoSloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

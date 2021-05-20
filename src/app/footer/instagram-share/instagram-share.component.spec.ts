import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramShareComponent } from './instagram-share.component';

describe('InstagramShareComponent', () => {
  let component: InstagramShareComponent;
  let fixture: ComponentFixture<InstagramShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

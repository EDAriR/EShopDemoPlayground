import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N020303Component } from './n020303.component';

describe('N020303Component', () => {
  let component: N020303Component;
  let fixture: ComponentFixture<N020303Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N020303Component]
    });
    fixture = TestBed.createComponent(N020303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

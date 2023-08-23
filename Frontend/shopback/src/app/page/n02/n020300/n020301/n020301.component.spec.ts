import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N020301Component } from './n020301.component';

describe('N020301Component', () => {
  let component: N020301Component;
  let fixture: ComponentFixture<N020301Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N020301Component]
    });
    fixture = TestBed.createComponent(N020301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

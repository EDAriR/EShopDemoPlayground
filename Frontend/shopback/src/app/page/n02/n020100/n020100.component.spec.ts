import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N020100Component } from './n020100.component';

describe('N020100Component', () => {
  let component: N020100Component;
  let fixture: ComponentFixture<N020100Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N020100Component]
    });
    fixture = TestBed.createComponent(N020100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

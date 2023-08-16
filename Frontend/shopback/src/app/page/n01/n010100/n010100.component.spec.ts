import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N010100Component } from './n010100.component';

describe('N010100Component', () => {
  let component: N010100Component;
  let fixture: ComponentFixture<N010100Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N010100Component]
    });
    fixture = TestBed.createComponent(N010100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

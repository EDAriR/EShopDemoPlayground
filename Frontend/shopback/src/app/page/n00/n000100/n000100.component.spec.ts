import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N000100Component } from './n000100.component';

describe('N000100Component', () => {
  let component: N000100Component;
  let fixture: ComponentFixture<N000100Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N000100Component]
    });
    fixture = TestBed.createComponent(N000100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

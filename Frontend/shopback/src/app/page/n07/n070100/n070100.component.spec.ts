import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N070100Component } from './n070100.component';

describe('N070100Component', () => {
  let component: N070100Component;
  let fixture: ComponentFixture<N070100Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N070100Component]
    });
    fixture = TestBed.createComponent(N070100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

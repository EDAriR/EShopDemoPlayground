import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N070201Component } from './n070201.component';

describe('N070201Component', () => {
  let component: N070201Component;
  let fixture: ComponentFixture<N070201Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N070201Component]
    });
    fixture = TestBed.createComponent(N070201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

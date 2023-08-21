import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N020101Component } from './n020101.component';

describe('N020101Component', () => {
  let component: N020101Component;
  let fixture: ComponentFixture<N020101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N020101Component]
    });
    fixture = TestBed.createComponent(N020101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

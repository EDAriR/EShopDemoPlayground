import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N020302Component } from './n020302.component';

describe('N020302Component', () => {
  let component: N020302Component;
  let fixture: ComponentFixture<N020302Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N020302Component]
    });
    fixture = TestBed.createComponent(N020302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

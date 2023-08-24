import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N020304Component } from './n020304.component';

describe('N020304Component', () => {
  let component: N020304Component;
  let fixture: ComponentFixture<N020304Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N020304Component]
    });
    fixture = TestBed.createComponent(N020304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

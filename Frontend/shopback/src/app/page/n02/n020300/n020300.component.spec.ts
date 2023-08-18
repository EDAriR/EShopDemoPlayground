import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N020300Component } from './n020300.component';

describe('N020300Component', () => {
  let component: N020300Component;
  let fixture: ComponentFixture<N020300Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N020300Component]
    });
    fixture = TestBed.createComponent(N020300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N010200Component } from './n010200.component';

describe('N010200Component', () => {
  let component: N010200Component;
  let fixture: ComponentFixture<N010200Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N010200Component]
    });
    fixture = TestBed.createComponent(N010200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

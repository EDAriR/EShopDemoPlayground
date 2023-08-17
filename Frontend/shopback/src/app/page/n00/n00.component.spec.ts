import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N00Component } from './n00.component';

describe('N00Component', () => {
  let component: N00Component;
  let fixture: ComponentFixture<N00Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N00Component]
    });
    fixture = TestBed.createComponent(N00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

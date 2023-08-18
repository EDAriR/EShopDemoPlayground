import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N020400Component } from './n020400.component';

describe('N020400Component', () => {
  let component: N020400Component;
  let fixture: ComponentFixture<N020400Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N020400Component]
    });
    fixture = TestBed.createComponent(N020400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

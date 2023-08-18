import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N000300Component } from './n000300.component';

describe('N000300Component', () => {
  let component: N000300Component;
  let fixture: ComponentFixture<N000300Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N000300Component]
    });
    fixture = TestBed.createComponent(N000300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

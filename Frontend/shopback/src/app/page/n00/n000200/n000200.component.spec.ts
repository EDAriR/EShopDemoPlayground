import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N000200Component } from './n000200.component';

describe('N000200Component', () => {
  let component: N000200Component;
  let fixture: ComponentFixture<N000200Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N000200Component]
    });
    fixture = TestBed.createComponent(N000200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

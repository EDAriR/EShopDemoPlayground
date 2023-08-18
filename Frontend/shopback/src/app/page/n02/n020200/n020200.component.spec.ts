import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N020200Component } from './n020200.component';

describe('N020200Component', () => {
  let component: N020200Component;
  let fixture: ComponentFixture<N020200Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N020200Component]
    });
    fixture = TestBed.createComponent(N020200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

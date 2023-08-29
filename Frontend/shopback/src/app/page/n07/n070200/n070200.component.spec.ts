import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N070200Component } from './n070200.component';

describe('N070200Component', () => {
  let component: N070200Component;
  let fixture: ComponentFixture<N070200Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N070200Component]
    });
    fixture = TestBed.createComponent(N070200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

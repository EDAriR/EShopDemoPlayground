import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N010101Component } from './n010101.component';

describe('N010101Component', () => {
  let component: N010101Component;
  let fixture: ComponentFixture<N010101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N010101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N010101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

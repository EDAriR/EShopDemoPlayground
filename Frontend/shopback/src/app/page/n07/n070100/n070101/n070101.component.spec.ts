import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N070101Component } from './n070101.component';

describe('N070101Component', () => {
  let component: N070101Component;
  let fixture: ComponentFixture<N070101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N070101Component]
    });
    fixture = TestBed.createComponent(N070101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

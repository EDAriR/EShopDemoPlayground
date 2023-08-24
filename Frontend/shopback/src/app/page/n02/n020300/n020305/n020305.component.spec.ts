import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N020305Component } from './n020305.component';

describe('N020305Component', () => {
  let component: N020305Component;
  let fixture: ComponentFixture<N020305Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N020305Component]
    });
    fixture = TestBed.createComponent(N020305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

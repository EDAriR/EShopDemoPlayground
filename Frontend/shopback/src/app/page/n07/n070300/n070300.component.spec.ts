import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N070300Component } from './n070300.component';

describe('N070300Component', () => {
  let component: N070300Component;
  let fixture: ComponentFixture<N070300Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N070300Component]
    });
    fixture = TestBed.createComponent(N070300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

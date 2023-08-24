import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N0203dialogComponent } from './n0203dialog.component';

describe('N0203dialogComponent', () => {
  let component: N0203dialogComponent;
  let fixture: ComponentFixture<N0203dialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [N0203dialogComponent]
    });
    fixture = TestBed.createComponent(N0203dialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TP2Component } from './tp2.component';

describe('TP2Component', () => {
  let component: TP2Component;
  let fixture: ComponentFixture<TP2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TP2Component]
    });
    fixture = TestBed.createComponent(TP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cube3Component } from './cube3.component';

describe('Cube3Component', () => {
  let component: Cube3Component;
  let fixture: ComponentFixture<Cube3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cube3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cube3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

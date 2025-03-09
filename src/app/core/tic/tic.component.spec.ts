import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicComponent } from './tic.component';

describe('TicComponent', () => {
  let component: TicComponent;
  let fixture: ComponentFixture<TicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicComponent]
    });
    fixture = TestBed.createComponent(TicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

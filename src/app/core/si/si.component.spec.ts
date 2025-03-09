import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiComponent } from './si.component';

describe('SiComponent', () => {
  let component: SiComponent;
  let fixture: ComponentFixture<SiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiComponent]
    });
    fixture = TestBed.createComponent(SiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

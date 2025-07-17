import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistervisitorComponent } from './registervisitor.component';

describe('RegistervisitorComponent', () => {
  let component: RegistervisitorComponent;
  let fixture: ComponentFixture<RegistervisitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistervisitorComponent]
    });
    fixture = TestBed.createComponent(RegistervisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

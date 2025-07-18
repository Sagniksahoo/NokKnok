import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagevisitorComponent } from './managevisitor.component';

describe('ManagevisitorComponent', () => {
  let component: ManagevisitorComponent;
  let fixture: ComponentFixture<ManagevisitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagevisitorComponent]
    });
    fixture = TestBed.createComponent(ManagevisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

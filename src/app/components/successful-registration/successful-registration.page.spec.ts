import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessfulRegistrationPage } from './successful-registration.page';

describe('SuccessfulRegistrationPage', () => {
  let component: SuccessfulRegistrationPage;
  let fixture: ComponentFixture<SuccessfulRegistrationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuccessfulRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

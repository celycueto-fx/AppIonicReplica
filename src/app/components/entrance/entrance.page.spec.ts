import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { EntrancePage } from './entrance.page';

describe('EntrancePage', () => {
  let component: EntrancePage;
  let fixture: ComponentFixture<EntrancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EntrancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

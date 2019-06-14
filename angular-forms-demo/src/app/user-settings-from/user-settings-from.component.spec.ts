import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsFromComponent } from './user-settings-from.component';

describe('UserSettingsFromComponent', () => {
  let component: UserSettingsFromComponent;
  let fixture: ComponentFixture<UserSettingsFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

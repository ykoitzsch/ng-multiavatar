import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMultiavatarComponent } from './ng-multiavatar.component';

describe('NgMultiavatarComponent', () => {
  let component: NgMultiavatarComponent;
  let fixture: ComponentFixture<NgMultiavatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMultiavatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMultiavatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymnaseListComponent } from './gymnase-list.component';

describe('AddListComponent', () => {
  let component: GymnaseListComponent;
  let fixture: ComponentFixture<GymnaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymnaseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymnaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

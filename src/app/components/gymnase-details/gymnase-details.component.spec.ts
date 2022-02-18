import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymnaseDetailsComponent } from './gymnase-details.component';

describe('AddDetailsComponent', () => {
  let component: GymnaseDetailsComponent;
  let fixture: ComponentFixture<GymnaseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymnaseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymnaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

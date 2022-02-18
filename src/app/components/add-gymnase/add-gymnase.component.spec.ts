import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGymnaseComponent } from './add-gymnase.component';

describe('AddGymnaseComponent', () => {
  let component: AddGymnaseComponent;
  let fixture: ComponentFixture<AddGymnaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGymnaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGymnaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

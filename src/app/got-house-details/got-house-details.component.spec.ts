import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotHouseDetailsComponent } from './got-house-details.component';

describe('GotHouseDetailsComponent', () => {
  let component: GotHouseDetailsComponent;
  let fixture: ComponentFixture<GotHouseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GotHouseDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotHouseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

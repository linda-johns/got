import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotHousesComponent } from './got-houses.component';

describe('GotHousesComponent', () => {
  let component: GotHousesComponent;
  let fixture: ComponentFixture<GotHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GotHousesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

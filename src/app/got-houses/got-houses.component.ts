import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GotService } from '../got.service';
import {MatDialog} from '@angular/material/dialog';
import { GotHouseDetailsComponent } from '../got-house-details/got-house-details.component';

@Component({
  selector: 'app-got-houses',
  templateUrl: './got-houses.component.html',
  standalone: false,
  encapsulation: ViewEncapsulation.None
})
export class GotHousesComponent implements OnInit {
  houses = [];
  constructor(
    private gotService: GotService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    try {
      // Getting list of houses
      this.gotService.getHouses().subscribe((res) => {
        this.houses = res;
      });
    } catch (error) {
      console.log(error);
    }
  }

  viewHouseDetails(house : any) {
    // Display house details
    this.dialog.open(GotHouseDetailsComponent, {
      data: {url: house['url']},
    });
  }

}

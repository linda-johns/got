import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { GotService } from '../got.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-got-house-details',
  templateUrl: './got-house-details.component.html',
  styleUrl: './got-house-details.component.css',
  standalone: false
})
export class GotHouseDetailsComponent implements OnInit{
  house: any = {};
  currentLord: any = null;
  founder: any = null;
  heir: any = null;
  constructor(
    private gotService: GotService,
    public dialogRef: MatDialogRef<GotHouseDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    // Load data
    this.loadHouseDetails();
  }

  close(): void {
    // Close house detail page
    this.dialogRef.close();
  }

  async loadHouseDetails() {
    try {
      await this.gotService.getData(this.data.url).subscribe((res) => {
        this.house = res;
        // Fetch details of current lord
        if (this.house['currentLord']) {
          this.gotService.getData(this.house['currentLord']).subscribe((res) => {
            this.currentLord = res;
          });
        }
        // Fetch details of founder
        if (this.house['founder']) {
          this.gotService.getData(this.house['founder']).subscribe((res) => {
            this.founder = res;
          });
        }
        // Fetch details of heir
        if (this.house['heir']) {
          this.gotService.getData(this.house['heir']).subscribe((res) => {
            this.heir = res;
          });
        }
      });
      
    } catch (error) {
      console.log(error);
    }
  }

  getDisplayValue(obj: any, key: string) {
    if(obj && obj[key]) {
      return obj[key];
    } else return 'NA';
  }


}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GotHousesComponent } from './got-houses/got-houses.component';
import { GotHouseDetailsComponent } from './got-house-details/got-house-details.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent, GotHousesComponent, GotHouseDetailsComponent
  ],
  imports: [
    AppRoutingModule, 
    BrowserModule, 
    BrowserAnimationsModule,    
    MatCardModule,  
    MatDialogModule,
    MatButtonModule
  ],
  providers: [provideHttpClient()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

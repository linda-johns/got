import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  private baseUrl = 'https://anapioficeandfire.com/api/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getHouses(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'houses');
  }

  getData(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
  
}

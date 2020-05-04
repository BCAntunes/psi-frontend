import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/hotel';

@Injectable({
  providedIn: 'root'
})

export class HotelService {

  baseURL = 'http://localhost:3079/catalog/';
  hotelURL = this.baseURL + 'hotel/';

  constructor(private http: HttpClient) {

    getHotel(id: String) {
      const url = this.hotelURL + id;
      return this.http.get<Hotel>(url);
    }

  }
}

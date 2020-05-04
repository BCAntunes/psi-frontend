import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Quarto } from 'src/quarto';


@Injectable({
  providedIn: 'root'
})

export class QuartoService {

  baseURL = 'http://localhost:3079/catalog/';
  quartoURL = this.baseURL + 'hotel/quarto';

  constructor(private http: HttpClient) {

    getQuarto(id: String) {
      const url = this.quartoURL + id;
      return this.http.get<Quarto>(url);
    }

  }
}

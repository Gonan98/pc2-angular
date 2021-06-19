import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasto } from './models/Gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor(private http: HttpClient) { }

  private url = 'https://app-saver-api.herokuapp.com/outcomes';

  getGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.url);
  }

  saveGastos(gasto: Gasto): Observable<any> {
    return this.http.post(this.url, gasto);
  }
}

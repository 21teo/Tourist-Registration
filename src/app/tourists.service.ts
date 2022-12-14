import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tourist } from './tourist';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  private urloft = "http://localhost:9195/tourist/get";
  private urloftc = "http://localhost:9195/tourist/add";

  constructor(private httpClient: HttpClient) { }
  
  getTouristsList(): Observable<Tourist[]>{
    return this.httpClient.get<Tourist[]>(`${this.urloft}`);
  }

  createTourist(tourist: Tourist): Observable<Object>{
    return this.httpClient.post(`${this.urloftc}`, tourist);
  }

}

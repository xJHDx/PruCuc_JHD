import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {


  API_URI = 'https://datos.gob.es/apidata/catalog';
  authSubject = new BehaviorSubject(false);
  
  constructor(private httpClient: HttpClient) { }

  getItems() {
    return this.httpClient.get(`${this.API_URI}/distribution.json`);
  }

}

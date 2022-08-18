import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  GetMaps(){
    return this.http.get('https://api.geoapify.com/v1/routing?waypoints=45.2551338,19.8451756|44.8178131,20.4568974&mode=drive&details=instruction_details&apiKey=01b0a3da93364008b7f5ca196afa210a');
  }
}

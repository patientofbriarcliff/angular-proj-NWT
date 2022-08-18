import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Root, Feature, Properties, Waypoint, Leg, Step, Instruction, Geometry, Properties2, Waypoint2 } from '../interface/routing';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private http:HttpClient) { }

  getWaypoint(): Observable<Waypoint>{
    return this.http.get<Waypoint>('https://api.geoapify.com/v1/routing?waypoints=50.96209827745463%2C4.414458883409225%7C50.429137079078345%2C5.00088081232559&mode=drive&apiKey=01b0a3da93364008b7f5ca196afa210a')
  }
}

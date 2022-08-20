import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Map } from 'maplibre-gl';
import MapLibreGlDirections from '@maplibre/maplibre-gl-directions';

@Component({
  selector: 'my-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  private map: Map;
  private startLocation: string = '42.843,19.873';
  private destination: string = '45.267136,19.833549';
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    const myAPIKey = '01b0a3da93364008b7f5ca196afa210a';
    const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';

    const initialState = {
      lng: 21.0059,
      lat: 44.0165,
      zoom: 6
    };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
  }

  handleClick() {
    fetch(`https://api.geoapify.com/v1/routing?waypoints=${this.startLocation}|${this.destination}&details=elevation&mode=drive&apiKey=01b0a3da93364008b7f5ca196afa210a`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    })
    .then((response) => {
      return response.json()
    }).then(data => {
      const map = this.map;

      const directions = new MapLibreGlDirections(map, {
        requestOptions: {
          alternatives: 'true',
        }
      });
      const { coordinates } = data.features[0].geometry;
      directions.setWaypoints([
        coordinates[0][0],
        coordinates[0][coordinates[0].length -1]
      ]);
    });
  }

}
function err(err: any): void | PromiseLike<void> {
  throw new Error('Function not implemented.');
}


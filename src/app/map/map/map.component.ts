import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Map } from 'maplibre-gl';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'my-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  private map: Map;

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
}
function err(err: any): void | PromiseLike<void> {
  throw new Error('Function not implemented.');
}


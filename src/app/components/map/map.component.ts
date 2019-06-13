import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  lat = 38.344612;
  lng = -0.490443;
  
  constructor() {

    const newMarker = new Marker(38.344612, -0.490443);
    this.markers.push(newMarker);

  }

  ngOnInit() {
  }

  addMarker(event) {

    // Creating a coords object and predefining it
    const coords: { lat: number, lng: number } = event.coords;

    const newMarker = new Marker(coords.lat, coords.lng);

    this.markers.push(newMarker);

  }

}

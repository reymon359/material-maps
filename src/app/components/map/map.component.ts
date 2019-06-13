import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { EditMapComponent } from './edit-map.component';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  lat = 38.344612;
  lng = -0.490443;

  constructor(private snackBar: MatSnackBar,public dialog: MatDialog) {

    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }

  }

  ngOnInit() {
  }

  addMarker(event) {

    // Creating a coords object and predefining it
    const coords: { lat: number, lng: number } = event.coords;
    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push(newMarker);
    this.saveStorage();
    this.snackBar.open('Marker added', 'Close', { duration: 3000 });

  }

  deleteMarker(i: number) {

    this.markers.splice(i, 1);
    this.saveStorage();
    this.snackBar.open('Marker deleted', 'Close', { duration: 3000 });

  }

  editMarker(marker:Marker){

      const dialogRef = this.dialog.open(EditMapComponent, {
        width: '250px',
        data: {title: marker.title, desc: marker.desc}
      });
  
      dialogRef.afterClosed().subscribe(result => {
console.log(result);
      });
  }

  saveStorage() {

    localStorage.setItem('markers', JSON.stringify(this.markers));

  }



}

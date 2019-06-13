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

    // Load the markers array from the localStorage
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

  // Deletes a marker from the array (pos passed by params) and saves the storage.
  deleteMarker(i: number) {

    this.markers.splice(i, 1);
    this.saveStorage();
    this.snackBar.open('Marker deleted', 'Close', { duration: 3000 });

  }

  // Opens a dialog to edit the modal data
  editMarker(marker: Marker) {

      // Opens the dialog with the EditMapComponent "inside"
      const dialogRef = this.dialog.open(EditMapComponent, {
        width: '250px',
        data: {title: marker.title, desc: marker.desc}
      });
  
      dialogRef.afterClosed().subscribe(result => {

        // Exit when dialog doesn't return data
        if (!result){
          return;
        }

        marker.title = result.title;
        marker.desc = result.desc;

        this.saveStorage();
        this.snackBar.open('Marker updated', 'Close', { duration: 3000 });

      });
  }

  // Saves the markers array in the localStorage
  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));

  }



}

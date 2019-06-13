import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit-map',
  templateUrl: './edit-map.component.html',
  styleUrls: ['./edit-map.component.css']
})
export class EditMapComponent implements OnInit {

  formu: FormGroup; // html front data

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formu = formBuilder.group({
      title: data.title,
      desc: data.desc
    });
  }

  ngOnInit() {
  }
  // Close the modal sending back the form data
  saveChanges() {
    this.dialogRef.close(this.formu.value);
  }
  // Closing the modal
  onNoClick(): void {
    this.dialogRef.close();
  }

}

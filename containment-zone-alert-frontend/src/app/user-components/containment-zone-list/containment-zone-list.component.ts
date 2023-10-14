import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-containment-zone-list',
  templateUrl: './containment-zone-list.component.html',
  styleUrls: ['./containment-zone-list.component.css']
})
export class ContainmentZoneListComponent {
  fullName: string = '';
  email: string = '';
  containmentZone: string = '';
  address: string = '';
  additionalDetails: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const data = {
      fullName: this.fullName,
      email: this.email,
      containmentZone: this.containmentZone,
      address: this.address,
      additionalDetails: this.additionalDetails
    };

    this.http.post('http://localhost:9000/details/submit', data).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
        alert("Data Saved Successfull");
        window.location.reload();
      },
      (error) => {
        console.error('Error saving data:', error);
      }
    );
  }
}

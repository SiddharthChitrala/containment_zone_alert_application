import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-containment-zone-details',
  templateUrl: './containment-zone-details.component.html',
  styleUrls: ['./containment-zone-details.component.css']
})
export class ContainmentZoneDetailsComponent {
  fullName: string = '';
  email: string = '';
  containmentZone: string = '';
  address: string = '';
  additionalDetails: string = '';
  submitData: any[] = [];
  filteredLoginData: any[] = [];
  searchQuery: string = "";
  selectedUserId: string | null = null; // To store the selected user ID for updates

  constructor(private http: HttpClient) {
    this.getAllDetails();
  }

  getAllDetails() {
    this.http.get("http://localhost:9000/details/retrieve").subscribe((resultData: any) => {
      this.submitData = resultData.data; // This should work correctly
      this.filteredLoginData = this.submitData; // Initialize filtered data with all login data
    });
  }

  editUser(data: any) {
    this.selectedUserId = data._id;
    this.fullName = data.fullName;
    this.email = data.email;
    this.containmentZone = data.containmentZone;
    this.address = data.address;
    this.additionalDetails = data.additionalDetails;
  }

  deleteUser(data: any) {
    if (!data._id) {
      console.error('User ID is undefined');
      return;
    }

    this.http.delete(`http://localhost:9000/details/delete/${data._id}`).subscribe(
      (response: any) => {
        console.log('User deleted:', response);
        this.getAllDetails();
      },
      (error: any) => {
        console.error('Error deleting user:', error);
      }
    );
  }

  filterDataBySearch() {
    this.filteredLoginData = this.submitData.filter(data =>
      data.containmentZone.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onSubmit() {
    const data = {
      fullName: this.fullName,
      email: this.email,
      containmentZone: this.containmentZone,
      address: this.address,
      additionalDetails: this.additionalDetails,
    };
  
    if (this.selectedUserId) {
      // Update existing data if selectedUserId is set
      this.http.patch(`http://localhost:9000/details/update/${this.selectedUserId}`, data).subscribe(
        (response) => {
          console.log('Data updated successfully:', response);
          alert('Data Updated Successfully');
          window.location.reload();
        },
        (error) => {
          console.error('Error updating data:', error);
        }
      );
    } else {
      // Add new data if selectedUserId is not set
      this.http.post('http://localhost:9000/details/submit', data).subscribe(
        (response) => {
          console.log('Data saved successfully:', response);
          alert('Data Saved Successfully');
          window.location.reload();
        },
        (error) => {
          console.error('Error saving data:', error);
        }
      );
    }
  
    // Reset the selectedUserId and form fields after submitting
    this.selectedUserId = null;
    this.fullName = '';
    this.email = '';
    this.containmentZone = '';
    this.address = '';
    this.additionalDetails = '';
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-data',
  templateUrl: './login-data.component.html',
  styleUrls: ['./login-data.component.css']
})
export class LoginDataComponent {

  loginData: any[] = [];
  filteredLoginData: any[] = [];
  searchQuery: string = "";

  constructor(private http: HttpClient) {
    this.getAllDetails();
  }

  getAllDetails() {
    this.http.get("http://localhost:9000/data").subscribe((resultData: any) => {
      console.log(resultData);
      this.loginData = resultData.users;
      this.filteredLoginData = this.loginData; // Initialize filtered data with all login data
    });
  }
  
  getRoleLabel(roleValue: number): string {
    switch (roleValue) {
      case 0:
        return 'User';
      case 1:
        return 'Admin';
      default:
        return 'Unknown'; // Handle any unexpected role values
    }
  }
  
  deleteUser(data: any) {
    if (!data._id) {
      console.error('User ID is undefined');
      return;
    }
  
    this.http.delete(`http://localhost:9000/data/${data._id}`).subscribe(
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
    this.filteredLoginData = this.loginData.filter(data =>
      data.username.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}

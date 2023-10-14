import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard-details',
  templateUrl: './admin-dashboard-details.component.html',
  styleUrls: ['./admin-dashboard-details.component.css']
})
export class AdminDashboardDetailsComponent implements OnInit {
  progressData: any = { totalUsers: 0, totalFullName: 0 };
  MAX_USERS: number = 100;
  MAX_ANOTHER_VALUE: number = 100; // Adjust this value as needed

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
    this.fetchAnotherData();
  }

  fetchData() {
    this.http.get('http://localhost:9000/data').subscribe(
      (data: any) => {
        console.log('Users Data received:', data);
        this.progressData.totalUsers = data.users.length;
      },
      (error) => {
        console.error('Error fetching users data:', error);
      }
    );
  }

  fetchAnotherData() {
    this.http.get('http://localhost:9000/details/retrieve').subscribe(
      (data: any) => {
        console.log('Data received:', data);

        let fullNameCount = 0;
        for (const item of data.data) {
          if (item.fullName) {
            fullNameCount++;
          }
        }

        // Calculate the percentage even for counts of 0 or 1
        this.progressData.totalFullName = (fullNameCount / data.data.length) * 100;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}

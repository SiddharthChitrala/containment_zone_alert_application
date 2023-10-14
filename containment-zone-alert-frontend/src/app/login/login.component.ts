import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

interface ApiResponse {
  message: string;
  role: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  activeTab: string = 'login'; // Default to 'login'
  username: string = '';
  email: string = '';
  password: string = '';
  role: number = 0;

  constructor(private http: HttpClient, private router: Router) { }

  toggleTab(tab: string) {
    this.activeTab = tab;
  }

  register(): void {
    this.http.post<ApiResponse>('http://localhost:9000/register', {
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Registration error:', error);
        if (error.status === 401) {
          return throwError('Registration failed: Invalid credentials');
        } else {
          return throwError('Registration failed: An error occurred');
        }
      })
    ).subscribe(
      (response: ApiResponse) => {
        console.log(response.message);
        if (response.role === 0) {
          this.router.navigate(['/auth']);
          location.reload(); // Reload the window
        } else if (response.role === 1) {
          this.router.navigate(['/auth']);
          location.reload(); // Reload the window
        }
        // Clear the form fields
        this.username = '';
        this.email = '';
        this.password = '';
        this.role = 0;
      }
    );
  }
  

  login(): void {
    this.http.post<ApiResponse>('http://localhost:9000/login', {
      email: this.email,
      password: this.password
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Login error:', error);
        if (error.status === 401) {
          return throwError('Login failed: Invalid credentials');
        } else {
          return throwError('Login failed: An error occurred');
        }
      })
    ).subscribe(
      (response: ApiResponse) => {
        console.log('API Response:', response); // Debugging line
        console.log(response.message);
        console.log('User role:', response.role);

        if (typeof response.role === 'number') {
          if (response.role === 0) {
            this.router.navigate(['/user-dashboard']);
          } else if (response.role === 1) {
            this.router.navigate(['/admin-dashboard']);
          } else {
            console.error('Invalid role:', response.role);
          }
        } else {
          console.error('Invalid role data:', response.role);
        }
      }
    );
  }
}

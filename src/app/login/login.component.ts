import { Component } from '@angular/core';
import{user} from '../models/user'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { userservice } from '../userService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router, private userService: userservice) { }

  login(mail:String, password:String){
    const url = 'http://localhost:8080/demo/';
    const body = JSON.stringify({mail: mail, password: password});
    return this.http.post(url, body).pipe(
      map((response: any) => {
        return new user(
          response.status_code,
          response.message,
          response.first_name,
          response.last_name,
          response.birthdate,
          response.mail,
          response.gender,
          response.mobile,
          response.address,
          response.balance,
          response.userid,
          response.token
        );
      })
    ).subscribe(user => {
      if (user.status_code === -1) {
        alert('Login failed');
      } else {
        console.log(user);
        this.userService.setUser(user);
        this.router.navigate(['/details'], {state: {user}});
      }
    });
  }
}

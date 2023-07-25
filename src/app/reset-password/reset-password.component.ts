import { Component } from '@angular/core';
import{user} from '../models/user'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  constructor(private http: HttpClient, private router: Router) { }

  resetPassword(mail:string, question:string, answer:string){
    const url = 'http://localhost:8080/demo/resetPassword';
    const body = {mail: mail, question_id:parseInt( question), answer: answer};
    return this.http.post(url, body).pipe(map((response:any)=>{
      return new user(
        response.status_code,
        response.message
        );
      })
      ).subscribe(user => {
        if (user.status_code === -1) {
          console.log(body);
          alert('Failed to reset password');
        } else {
          console.log(user);
          alert('Password has been reset successfully, Please check your email for the new password')
        }
      });
    }
  }
  
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private router: Router){}

  title = 'youssef';

  isLoginPage(){
    return this.router.url === '/login';
  }
  isResetPasswordPage(){
    return this.router.url === '/resetPassword';
  }
}

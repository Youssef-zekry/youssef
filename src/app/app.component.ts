import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { user } from './models/user';
import { userservice } from './userService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user?: user;

  constructor( private router: Router, private userservice: userservice){}
  title = 'youssef';

  ngOnInit() {
    this.user = this.userservice.getUser();
  }

get isLoggedIn(){
  return this.userservice.isLoggedIn;
}








  isLoginPage(){
    return this.router.url === '/login';
  }
  isResetPasswordPage(){
    return this.router.url === '/resetPassword';
  }
}

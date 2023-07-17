import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from '../models/user';
import { userservice } from '../userService';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  user?: user;
  constructor(
    private route: ActivatedRoute,
    private userService: userservice
  ) {}
  ngOnInit() {
    this.user = this.userService.getUser();
  }
}

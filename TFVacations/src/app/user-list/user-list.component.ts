import { Component, OnInit } from '@angular/core';
import { User, UsersService } from './users.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tf-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  Users: Observable<Array<User>>;

  constructor(private usersService: UsersService) {
    this.usersService = usersService;
  }

  ngOnInit() {
    this.Users = this.usersService.getUsers();
  }
}

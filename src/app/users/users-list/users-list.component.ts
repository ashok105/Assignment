import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  data!: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.data = this.userService.users;
    }, 2000);
  }
  onCreateUser(f: NgForm) {
    this.userService.addUser(f.form.value);
    f.reset();
  }
}

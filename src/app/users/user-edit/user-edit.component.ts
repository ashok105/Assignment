import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  index!: number;
  user!: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.index = +this.route.snapshot.params['id'];
    this.user = this.userService.getUser(this.index);
  }
  onUpdate() {
    this.userService.updateUser(this.index, this.user);
    this.router.navigate(['']);
  }
  onBack() {
    this.router.navigate(['']);
  }
}

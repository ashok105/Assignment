import { Component, OnInit } from '@angular/core';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Assignment';
  constructor(private uService: UsersService) {}
  ngOnInit(): void {
    this.uService.getData();
  }
}

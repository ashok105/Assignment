import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserItemComponent } from './users/users-list/user-item/user-item.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from './shared/users.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    UserItemComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}

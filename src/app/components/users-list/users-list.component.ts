import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { AsyncPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    UserCardComponent,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
  private readonly usersService = inject(UsersService);
  public readonly users$ = this.usersService.users$;

  ngOnInit(): void {
    this.usersService.loadUsers();
  }

  public deleteUser(id: number): void {
    this.usersService.deleteUser(id);
  }
}

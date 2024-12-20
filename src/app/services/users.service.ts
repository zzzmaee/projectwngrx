import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { UsersApiService } from './users-api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly usersApiService = inject(UsersApiService);
  private readonly usersSubject$ = new BehaviorSubject<User[]>([]);
  public users$ = this.usersSubject$.asObservable();

  constructor() {
    this.loadUsers()
  }

  public loadUsers(): void {
    this.usersApiService.getUsers().subscribe((users) => this.usersSubject$.next(users));
  }

  public deleteUser(id: number): void {
    this.usersSubject$.next(this.usersSubject$.value.filter(user => user.id !== id));
  }
}

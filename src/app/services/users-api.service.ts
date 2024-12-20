import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  private readonly http = inject(HttpClient);
  private readonly url = 'https://jsonplaceholder.typicode.com/users';

  constructor() {
  }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
}

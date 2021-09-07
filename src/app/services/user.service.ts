import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../const/config';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${BASE_URL}/users`);
  }
}

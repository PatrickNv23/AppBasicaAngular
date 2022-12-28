import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

interface IUser {
  name: string
}

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  user: IUser[] = [];

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users')
  }
}



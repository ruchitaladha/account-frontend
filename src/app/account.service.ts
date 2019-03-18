import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accountUrl = "http://localhost:8080/AccountManagement/account/";
  constructor() { }
}

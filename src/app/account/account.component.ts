import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'account-form',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  accounts : any[];
  private accountUrl = '/account';
  constructor(http:Http) {
  
    http.get(this.accountUrl)
    .subscribe(response=>{
      this.accounts = response.json();
      console.log(this.accounts);
    })
  }

}

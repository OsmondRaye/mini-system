
import { Component } from '@angular/core';
import { AccountService } from '../_services';
import { Account, Role } from '../_models';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {
    Role = Role;
    account: Account;
    isDarkMode: boolean = false;

    constructor(private accountService: AccountService) {
        this.accountService.account.subscribe(x => this.account = x);
    }

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
    }

    logout() {
        this.accountService.logout();
    }
}

// In your component.ts file
export class MyComponent {
    isDarkMode = false;
  
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
  

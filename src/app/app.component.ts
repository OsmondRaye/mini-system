import { Component } from '@angular/core';
import { AccountService } from './_services';
import { Account, Role } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
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

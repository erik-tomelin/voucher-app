import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate, CanActivateChild } from '@angular/router';
import { AccountService } from '@services/account.service';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

@Injectable({
	providedIn: 'root',
})
export class AuthGuardService implements CanActivate, CanActivateChild {
	constructor(
		private router: Router,
		private _accountService: AccountService,
	) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return true;
	}

	canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return this.canActivate(next, state);
	}
}

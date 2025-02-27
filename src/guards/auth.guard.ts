import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(private auth: AuthService){}

  canActivate(): boolean {
    return this.auth.isLoggedIn();
  }
  canActivateChild(): boolean {
    return this.canActivate();
  }
}
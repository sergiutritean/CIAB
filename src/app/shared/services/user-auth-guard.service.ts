import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable()
export class UserAuthGuardService implements CanActivate {

  constructor( private userService: UserService, private router: Router) {

  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.userService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}

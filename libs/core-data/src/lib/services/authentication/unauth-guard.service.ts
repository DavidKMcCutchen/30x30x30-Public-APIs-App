import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { FeaturesAuthFacade } from '@public-apis/core-state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FeaturesUnAuthGuard implements CanActivate {
  constructor(public router: Router, private authFacade: FeaturesAuthFacade) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authFacade.isUserAuthenticated$.pipe(
      map((userAuthenticated) => {
        if (!userAuthenticated) return true;
        this.router.navigateByUrl('/');
        return false;
      })
    );
  }
}
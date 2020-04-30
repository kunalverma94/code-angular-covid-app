import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../Models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private router: Router) {}
  public get CurrentUser(): User {
    let user = null;
    try {
      user = JSON.parse(unescape(localStorage.getItem('crtuser'))) as User;
    } catch (error) {}
    return user;
  }

  login(user: User): Observable<boolean> {
    if (user.password === 'admin' && user.user === 'admin') {
      localStorage.setItem('crtuser', escape(JSON.stringify(user)));
      return of(true);
    } else {
      return of(false);
    }
  }

  public get IsAuthorised(): boolean {
    let res = false;
    try {
      const user = JSON.parse(unescape(localStorage.getItem('crtuser'))) as User;
      res = user.user === 'admin' && user.password === 'admin';
    } catch (error) {
      res = false;
    }
    return res;
  }
  logout() {
    localStorage.removeItem('crtuser');
    localStorage.removeItem('first');
    this.router.navigate(['/home']);
  }
}

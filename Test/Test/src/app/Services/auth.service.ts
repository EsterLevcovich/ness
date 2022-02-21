import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  UserName=new Subject();

  constructor(private router: Router) { }
  getUser() {
    return sessionStorage.getItem('currentUserName')?sessionStorage.getItem('currentUserName'):'לא מחובר'
  }
  PostUser() {
    this.UserName.next(this.getUser()); 
  }
  isAuth() {
    debugger
    if (sessionStorage.getItem('currentUser'))
      return true;
      return false
  }
  loginAuth(operator: User) {
    sessionStorage.setItem('currentUser', operator.id+'');
    sessionStorage.setItem('currentUserName', operator.name);
    this.router.navigate(["/items-list"]);
    this.PostUser();
  }
  logout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUserName');
    this.router.navigate(["/login"]);
  }
}

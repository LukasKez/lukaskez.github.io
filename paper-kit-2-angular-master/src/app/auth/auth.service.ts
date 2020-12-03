import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export interface AuthInfo {
  isLoggedIn: boolean;
  isAdmin: boolean;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private authSubject = new Subject<AuthInfo>();
  readonly isLoggedIn$ = this.authSubject.asObservable();

  constructor() {}

  login(isAdmin = false): void {
    this.authSubject.next({ isLoggedIn: true, isAdmin });
  }

  register(isAdmin = false): void {
    this.authSubject.next({ isLoggedIn: true, isAdmin });
  }

  logout(isAdmin = false): void {
    this.authSubject.next({ isLoggedIn: false, isAdmin });
  }
}

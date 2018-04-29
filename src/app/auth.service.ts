import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class AuthService {
  constructor(http: Http) {}

  login(res) {}
  logout() {}
  isLoggedIn() {
    return false;
  }
}

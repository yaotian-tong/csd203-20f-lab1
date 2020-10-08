import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn : boolean = false;
  
   isloggedIn() {
    return this.loggedIn
    
  }
    signInWithEmail() {
    this.loggedIn = true;
    alert("Sign in pressed");
  }
  
}

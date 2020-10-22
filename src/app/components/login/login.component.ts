import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private auth: AuthService,private router: Router) { 
    
    
  }
  
  ngOnInit() {}

  signIn() {
    this.auth.signInWithEmail(this.email, this.password);
  }

  signInWithGoogle() {
    this.auth.signInWithGooglePopUp();
    }
   

}

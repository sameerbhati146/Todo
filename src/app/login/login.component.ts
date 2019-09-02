import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'sameerbhati'
  password = 'empty'
  errorMessage = 'Invlaid Credentials'
  show: boolean = false

  constructor(private router: Router,
      private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    
    // if(this.username === 'sameerbhati' && this.password === 'empty'){
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username]);
      this.show = false;
    }else{
      this.show = true;
    }
  }
  

}


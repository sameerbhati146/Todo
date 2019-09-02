import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    
    if(this.username === 'sameerbhati' && this.password === 'empty'){
      this.router.navigate(['welcome', this.username]);
      this.show = false;
    }else{
      this.show = true;
    }
  }
  

}


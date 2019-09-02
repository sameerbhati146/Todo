import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if(username === 'sameerbhati' && password === 'empty'){
      return true;
  }else{
    return false;
  }
}
}

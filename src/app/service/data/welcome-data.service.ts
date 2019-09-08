import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeWelcomeDataService(){
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
    //console.log("welcome data message service is executed..")
  }

  //http://localhost:8080/hello-world/path-variable/s
  executeWelcomePathVariable(name){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    //console.log("welcome data message service is executed..")
  }
}

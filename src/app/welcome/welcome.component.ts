import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "welcome to the ToDo application"
  welcomeMessageFromService: string
  errorMessageFromService: string
  name = ''
  show: boolean = false;

  constructor(private route:ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log(this.service.executeWelcomeDataService());
    this.service.executeWelcomeDataService().subscribe(
      response => this.handlingSuccessfulResponse(response),
      error => this.handleErrorMessage(error)
    );
  }

  getWelcomeMessageWithParameter(name){
    console.log(this.service.executeWelcomePathVariable(this.name));
    this.service.executeWelcomePathVariable(this.name).subscribe(
      response => this.handlingSuccessfulResponse(response),
      error => this.handleErrorMessage(error)
    );
  }

  

  handlingSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
    //console.log(response.message);
  }

  handleErrorMessage(error){
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
    if(this.errorMessageFromService = error.error.message){
      this.show = true;
    }this.show = false;
  }



}

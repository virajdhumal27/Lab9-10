import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username?: string;
  password?: string;
  
  constructor(private dataService: DataServiceService) {}

  
  ngOnInit() {
  }
  
  login() : void {
    console.log(this.username);
    console.log(this.password);
  }
}

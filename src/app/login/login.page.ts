import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username!: string;
  password!: string;
  
  constructor(private dataService: DataServiceService, private router: Router) {}

  
  ngOnInit() {
  }
  
  login() : void {
    console.log(this.username);
    console.log(this.password);
    
    this.dataService.loginUser(this.username, this.password).subscribe(res => {
      console.log(res[0]);
      if(res[0].username == this.username && res[0].password == this.password) {
        this.router.navigateByUrl(`/tabs/tab1/${res[0].user_id}`);
      } else {
        console.info("Username not matched!");
      }
    });


  }
}

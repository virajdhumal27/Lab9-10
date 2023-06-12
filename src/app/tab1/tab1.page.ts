import { ActivatedRoute } from '@angular/router';
import { DataServiceService, User } from './../services/data-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  user!: User;
  @Input() ucid?: string;
  @Input() branch?: string;
  @Input() course?: string;
  @Input() sgpa?: string;
  urlId!: any;
  
  constructor(private route: ActivatedRoute, private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.urlId = this.route.snapshot.paramMap.get('id');
    this.dataService.getUserById(this.urlId).subscribe(res => {
      this.user = res;
      this.ucid = this.user.ucid;
      this.branch = this.user.branch;
      this.course = this.user.course;
      this.sgpa = this.user.sgpa;
    });
  }

  saveData() : void {

    this.user = {
      user_id: this.urlId,
      ucid: this.ucid,
      branch: this.branch,
      course: this.course,
      sgpa: this.sgpa,
      username: this.user.username,
      password: this.user.password
    };
    

    console.table(this.user);

    this.dataService.saveData(this.user);
  }
}

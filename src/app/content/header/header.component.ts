import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  userInfoStr: string;
  constructor() { }
  ngOnInit() {
    this.userInfoStr = localStorage.getItem('userInfo');
    this.username = JSON.parse(this.userInfoStr).userName ;
  }

}

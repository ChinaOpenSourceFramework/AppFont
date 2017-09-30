import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserData } from '../user-data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: UserData;

  settings = {
    hideSubHeader: false,
    attr: {
      class: 'table table-striped'
    },
    actions: {
      columnTitle: '操作',
      position: 'right'
    },
    columns: {
      id: {
        title: 'ID'
      },
      loginName: {
        title: 'Full Name'
      },
      userName: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  data = [
    {
      id: 1,
      loginName: 'Leanne Graham',
      userName: 'Bret',
      email: 'Sincere@april.biz'
    },
    {
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },
    {
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },{
      id: 2,
      loginName: 'Ervin Howell',
      userName: 'Antonette',
      email: 'Shanna@melissa.tv'
    },
    {
      id: 11,
      loginName: 'Nicholas DuBuque',
      userName: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz'
    }
  ];


  constructor(private userService: UserService ) { }

  ngOnInit() {
  //  this.userService.getAllUser().then( res => {
   //   this.userList = res.data;
   // });
  }



}

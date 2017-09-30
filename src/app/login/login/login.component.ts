import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { UserService } from '../../content/user/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService,UserService]
})
export class LoginComponent implements OnInit {
  loginName: String;
  password: String;
  constructor(private loginService: LoginService,private userService:UserService ,private router: Router,) { }
  ngOnInit() {
  }
  login(): void {
    this.loginService.login(this.loginName, this.password)
      .then(message =>{
        if(message.code == 0){
          this.userService.getUserInfoByLoginName(this.loginName)
            .then(userinfo => {
              localStorage['userInfo']=JSON.stringify(userinfo.data);
            })
          this.router.navigate(['/content/dashboard']);
        }else {
          alert('登陆错误');
        }
      });
  }
}

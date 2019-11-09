import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataserviceService} from '../dataservice.service';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  c_password: any;
  auth_token: any;
  email: any;

  constructor(private router:Router,private route: ActivatedRoute,private dataservice:DataserviceService) { }

  home(){
    this.router.navigate(['']);
  }

  register(){
    this.router.navigate(['register']);
  }

  login() {
    let data = {
      "password" : this.password,
      "email" : this.email
    }
    this.dataservice.postData("login", data)
      .subscribe(
        result => {
          this.auth_token = result['success']['token'];
          localStorage.setItem("auth_token", this.auth_token);
          this.dataservice.getToken(this.auth_token);
          this.router.navigate(['dashboard']);
        },
        error => {
          console.error("error creating");
        }
      );
  }

  ngOnInit() {
  }

}

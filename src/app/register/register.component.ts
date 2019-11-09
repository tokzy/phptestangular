import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataserviceService} from '../dataservice.service';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: any;
  password: any;
  c_password: any;
  auth_token: any;
  email: any;


  constructor(private router:Router,private dataservice:DataserviceService) { }

 home(){
  this.router.navigate(['']);
 }

  login(){
    this.router.navigate(['login']);
  }

  Register() {
    let data = {
      "password" : this.password,
      "email" : this.email,
      "name":this.username,
      "c_password":this.c_password,
    }
    this.dataservice.postData("register", data)
      .subscribe(
        result => {
          this.auth_token = result['success']['token'];
          localStorage.setItem("auth_token", this.auth_token);
          this.dataservice.getToken(this.auth_token);
          alert('staff created successfully');
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

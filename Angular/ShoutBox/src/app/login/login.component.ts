import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl(null,  [Validators.required, Validators.email]),
    password: new FormControl(null,Validators.required),
  });

  constructor(
    private router: Router ,  
    private dataService:DataService
  ) { }

  ngOnInit(): void {
  }

  registerRoute() {
    this.router.navigate(['register']);
  }
  
  loginSuccess(){
    this.router.navigate(['footer']);
  }

  loginForm: any;
  data: any;
  status: any;
  message: any;
  token: any;

  loginSubmited(){

    this.loginForm = JSON.stringify(this.login.value);

    this.dataService.loginUser(this.loginForm).subscribe(res=>{
      // console.log(res);
      this.data = res;
      this.status = this.data.status;
      if(this.status == 1){
        this.token = this.data.data.name;
        localStorage.setItem('token',this.token);
        this.router.navigate(['temp']);
      }
      else{
        this.message = this.data.message;
      }
    });
    this.login.reset();
  }

}

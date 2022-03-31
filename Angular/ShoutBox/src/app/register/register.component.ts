import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(
      null,
      [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$')
      ]
    ),
  });
  
  constructor(
      private router: Router ,  
      private dataService:DataService
    ) { }

  ngOnInit(): void {
  }

  loginRoute() {
    this.router.navigate(['login']);
  }

  registerForm: any;

  registerSubmited() {
    
    this.registerForm = JSON.stringify(this.register.value);

    this.dataService.registerUser(this.registerForm).subscribe(res=>{
      console.log(res);
    });
    this.register.reset();
  }

}
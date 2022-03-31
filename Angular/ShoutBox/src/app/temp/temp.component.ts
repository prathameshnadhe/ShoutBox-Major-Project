import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent implements OnInit {
  token: any;
  userName: any;
  constructor(private route: Router) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.userName = this.token;
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['login']);
  }
}

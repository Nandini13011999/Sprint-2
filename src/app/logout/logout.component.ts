import { Component, OnInit } from '@angular/core';
import { AuthenicationService } from '../authenication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService:AuthenicationService, private router:Router) { }

  ngOnInit(): void {

    this.authenticationService.logout();
    this.router.navigate(['login']);
  }

}

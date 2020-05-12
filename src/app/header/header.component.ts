import { Component, OnInit } from '@angular/core';
import { AuthenicationService } from '../authenication.service';
import { AdminserviceService } from '../adminservice.service';
import { UserAuthenticationService } from '../user-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public logService:AuthenicationService,public userLogin:UserAuthenticationService) {
    
   }

  ngOnInit(): void {
  }

}

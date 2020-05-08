import { Component, OnInit } from '@angular/core';


import { Admin } from './admin';
import { AdminserviceService } from '../adminservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


admin:Observable<Admin[]>;

  constructor(private httpClientService:AdminserviceService) { }

  ngOnInit(): void {


    this.reloadAdmin();
  }

  reloadAdmin(){
   // this.admin=this.httpClientService.getAdminList();
  }


}

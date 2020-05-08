import { Component, OnInit } from '@angular/core';
import { AuthenicationService } from '../authenication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public logService:AuthenicationService) { }

  ngOnInit(): void {
  }

}

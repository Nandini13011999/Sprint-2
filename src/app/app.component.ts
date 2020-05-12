import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenicationService } from './authenication.service';

@Component({
  selector: 'app-root',
templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'testapp';

  constructor(public logService:AuthenicationService){}
}

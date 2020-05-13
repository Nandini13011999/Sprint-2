import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenicationService } from '../authenication.service';
import { Observable } from 'rxjs';
import { AdminserviceService } from '../adminservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from './login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;

  pass: string;
  login: Login;
  id: any;
  invalidLogin = false;
  loginForm: FormGroup;
  allow: string;

  constructor(private router: Router, private loginservice: AuthenicationService, private adminService: AdminserviceService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],

      pass: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit(): void {


    this.name = this.route.snapshot.params['name'];
    this.pass = this.route.snapshot.params['pass'];

    this.checkLogin();

  }

  checkLogin() {
    this.loginservice.isAdminLoggedIn(this.name, this.pass).subscribe(data => {

      console.log(data)
      this.id = data;
      this.allow = "true";

    },
      error => {
        console.log(error)
      }
    );

    if (this.id == null) {


      this.invalidLogin = true;
      this.allow = "false";
      return false;
    }
    else {
      alert('LOGIN SUCCESSFULL !!')
      sessionStorage.setItem('allow', this.allow)
      this.invalidLogin = false;

      return true;
    }
  }

}





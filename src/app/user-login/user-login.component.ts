import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControlName, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenicationService } from '../authenication.service';
import { UserAuthenticationService } from '../user-authentication.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  name:string
  pass:string
  id1:any
  invalidLogin=false;
  loginForm:FormGroup;
  constructor(private route:ActivatedRoute,private loginservice:UserAuthenticationService,private fb:FormBuilder,private router:Router) { 
    this.createForm();
  }

  ngOnInit(): void {

    
    this.name=this.route.snapshot.params['name'];
    this.pass=this.route.snapshot.params['pass'];
  //setTimeout(()=>{ this.checkLogin()},4000)
     this.checkUserLogin();
  }
  createForm() {
    this.loginForm = this.fb.group({
     name: ['',[Validators.required,Validators.minLength(2)]],
     pass:['',[Validators.required,Validators.minLength(2)]]
   
    });
  }

  checkUserLogin(){
    console.log("check login called")
    this.loginservice.isStudentLoggedIn(this.name,this.pass).subscribe (data=>{
    
      console.log(data)
      this.id1=data;
      console.log(this.id1)

    },
    error=>{
      console.log(error)
    }
    );
    
    if(this.id1==null){
   
console.log("id null")
      this.invalidLogin=true;
      return false;
    }
    else{
      alert('LOGIN SUCCESSFULL !!')

    sessionStorage.setItem('id',this.id1)
    console.log(sessionStorage.getItem)
    this.router.navigate(['test/']);
    this.invalidLogin=false;


    return true;
    }
    }



}

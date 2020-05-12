import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControlName, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route:ActivatedRoute,private loginservice:UserAuthenticationService,private fb:FormBuilder) { }

  ngOnInit(): void {

    this.createForm();
    this.name=this.route.snapshot.params['name'];
    this.pass=this.route.snapshot.params['pass'];
  //setTimeout(()=>{ this.checkLogin()},4000)
      this.checkLogin();
  }
  private createForm() {
    this.loginForm = this.fb.group({
     name: ['',[Validators.required,Validators.minLength(2)]],
     pass:['',[Validators.required,Validators.minLength(2)]]
   
    });
  }

  checkLogin(){
    console.log("check login called")
    this.loginservice.isStudentLoggedIn(this.name,this.pass).subscribe (data=>{
    
      console.log(data)
      this.id1=data;

    },
    error=>{
      console.log(error)
    }
    );
    
    if(this.id1==null){
   // alert('ID NOT FOUND !!')

      this.invalidLogin=true;
      return false;
    }
    else{
      //alert('LOGIN SUCCESSFULL !!')
    sessionStorage.setItem('id',this.id1)
    this.invalidLogin=false;
   //this.loginservice.login(user)
    return true;
    }
    }

  

}

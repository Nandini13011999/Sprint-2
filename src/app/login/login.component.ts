import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
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

  //private Student=new Student();

  /*private baseUrl="http://localhost:9090/Student/login";
  username='';
  password='';
  invalidLogin=false;
*/
name:string;

pass:string;
login:Login;
id:any;
invalidLogin=false;
loginForm: FormGroup;
 
  constructor(private router:Router,private loginservice:AuthenicationService,private adminService:AdminserviceService,private route:ActivatedRoute,private fb: FormBuilder) { 
    this.createForm();
  }
createForm(){
  this.loginForm = this.fb.group({
    name:['',[Validators.required,Validators.minLength(2)]],
   // name: ['', [Validators.required ,Validators.pattern('^[a-zA-Z]$')]],
    pass:['',[Validators.required,Validators.minLength(2)]]
 });
}
  
  ngOnInit(): void {
   
  // setTimeout(()=>{ this.createForm()},4000)
   this.name=this.route.snapshot.params['name'];
  this.pass=this.route.snapshot.params['pass'];
//setTimeout(()=>{ this.checkLogin()},4000)
    this.checkLogin();
   
  }
  
  checkLogin(){
    this.loginservice.isAdminLoggedIn(this.name,this.pass).subscribe (data=>{
    
      console.log(data)
      this.id=data;

    },
    error=>{
      console.log(error)
    }
    );
    
    if(this.id==null){
   // alert('ID NOT FOUND !!')

      this.invalidLogin=true;
      return false;
    }
    else{
      //alert('LOGIN SUCCESSFULL !!')
    sessionStorage.setItem('id',this.id)
    this.invalidLogin=false;
   //this.loginservice.login(user)
    return true;
    }
    }
    /*
    console.log("check login called")
    if(this.loginservice.isUserLoggedIn()){
      this.router.navigate(['/admin'])
      this.invalidLogin=false;
    }
    else
    this.invalidLogin=true;
*/
  }

  /*
  checkLogin(){
    if(this.loginservice.authenticateAdmin()){
      this.router.navigate(['/admin'])
      //this.invalidLogin=false;

    }/*else
    if(this.loginservice.authenticateUser(this.username,this.password)){
      this.router.navigate(['/question'])
      this.invalidLogin=false;

    }
    
    else
    this.invalidLogin=true;
  }*/



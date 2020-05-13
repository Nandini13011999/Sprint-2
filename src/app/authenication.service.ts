import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenicationService {

  private baseUrl="http://localhost:9090/Admin/login/";
 
  constructor(private http:HttpClient,private router:Router) { }

  name:string;
  authenticateAdmin(name:string,pass:string){
  }
  isAdminLoggedIn(name:string,pass:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/${name}/${pass}`)
    
  }
 
  login()
  {
    
    let id=sessionStorage.getItem('allow');
    //console.log(!(id==null))
return !(id==null);
  }

  
  logout(){
    sessionStorage.removeItem('allow');
  }
  
  /*
  authenticateUser(username,password){
    if(username === "nani" && password==="hello"){
      sessionStorage.setItem('username',username);
      return true;
    }
    
    else{
    console.log("enter valid username or password");
    return false;
    }
  }
  

  isUserLoggedIn(){
      let user=sessionStorage.getItem('username');
      console.log(!(user==null))
      return !(user==null);
    
  }
  */
 /*
  isAdminLoggedIn(){
    let user=sessionStorage.getItem('username');
    console.log(!(user==null))
    return !(user==null);
}


  logout(){
    sessionStorage.removeItem('username');
  }
  */
}

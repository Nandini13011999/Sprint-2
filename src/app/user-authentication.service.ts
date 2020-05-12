import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {




  private baseUrl1="http://localhost:9090/Student/login/";

  constructor(private http:HttpClient,private router:Router) { }
  authenticateStudent(name:string,pass:string){

  }
  isStudentLoggedIn(name:string,pass:string):Observable<any>{
    console.log(name)
    return this.http.get(`${this.baseUrl1}/${name}/${pass}`)
    
  }
  userLogin()
  {
    let id=sessionStorage.getItem('id');
    console.log(!(id==null))
return !(id==null);
  }

  
  logout(){
    sessionStorage.removeItem('id');
  }
}

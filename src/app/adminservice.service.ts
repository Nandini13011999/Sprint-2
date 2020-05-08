import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  private baseUrl="http://localhost:9090/Student/login/:name";
  
  constructor(private http:HttpClient,private router:Router) { }

login(name:String):Observable<any>{
  return this.http.get(`${this.baseUrl}/${name}`);
}

isLoggedIn(){
  if(this.login!=null){
    return true;
  }
  else
  return false;
}


  /*
  getAdminList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  */
}

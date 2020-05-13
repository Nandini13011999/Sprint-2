import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MytestService {
  
  private baseUrl="http://localhost:9090/test/findTestById";
  private baseUrl1="http://localhost:9090/test/deleteTest";
  private baseUrl2="http://localhost:9090/test/addTest";
  private baseUrl3="http://localhost:9090/test/assignTest";
  private baseUrl4="http://localhost:9090/test/updateTest";
  private baseUrl5="http://localhost:9090/student/findStudentById";
  //private baseUrl3="http://localhost:9090/test/assignTest";
  constructor(private http:HttpClient) { }

  
  searchtest(id:Number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

 // assigntest(studentId:Number,testId:number):Observable<any>
  //{
    //return this.http.post(`${this.baseUrl3}/${studentId}/${testId}`);
  //}
  saveTest(test:Object):Observable<any>
  {
    console.log("inside service save test ");
    return this.http.post(`${this.baseUrl2}/`,test);
  }

  updateTest(test:Object):Observable<Object>{
    
      return this.http.put(`${this.baseUrl4}`,test);
  }
  searchStudent(id:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl5}/${id}`);
  }

  assigntest(studentId:Number,testId:Number,student:Object):Observable<any>
  {
    return this.http.put(`${this.baseUrl3}/${studentId}/${testId}`,student);
  }

  removeTest(id:Number):Observable<any>{
    return this.http.delete(`${this.baseUrl1}/${id}`,{responseType:'text'});
  }
  
  getTestList():Observable<any>{
    return this.http.get(`http://localhost:9090/test/AllTest`);
  }


}
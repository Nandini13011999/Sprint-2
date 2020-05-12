import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionserviceService {

  private baseUrl="http://localhost:9090/test/addQuestion/";
  private baseUrl1="http://localhost:9090/test/updateQuestion";
  private baseUrl2="http://localhost:9090/test/deleteQuestion/";
  private baseUrl3="http://localhost:9090/test/AllQuestions";
  private baseUrl4="http://localhost:9090/test/findQuestionById/";

 // pivate baseUrl
  constructor(private http:HttpClient) {


   }
   /*
   login(name:String):Observable<any>{
     return this.http.get(`${this,this.baseUrl4}/{$name}`)
   }
*/
   searchQuestion(id:Number):Observable<any>{


    return this.http.get(`${this.baseUrl4}/${id}`)

  }

  saveQuestion(id:Number,question:Object):Observable<Object>{
   console.log('inside save question '+id)
   console.log("ques "+JSON.stringify(question))
    return this.http.post(`${this.baseUrl}/${id}`,question)
  }


  updateQuestion(id:Number,question:Object):Observable<Object>{
    return this.http.put(`${this.baseUrl1}/${id}`,question);
  }

  removeQuestion(id:Number):Observable<any>{
    console.log("remove called");
    return this.http.delete(`${this.baseUrl2}/${id}`,{responseType:'text'});
  }
  getQuestionList():Observable<any>{
    console.log("list called");
    return this.http.get(`${this.baseUrl3}`);
  }


}

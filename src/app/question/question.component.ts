import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Question, Answer } from './question';
import { QuestionserviceService } from '../questionservice.service';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
ques1:Question;
 question:Observable<Question[]>;
  answer:Answer[];
  constructor(private service:QuestionserviceService,private router:Router) { }
  
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.question=this.service.getQuestionList();
    /*
this.ques1=new Question();
this.question.subscribe(questionOptions=>{
this.ques1=questionOptions.values();
})
*/
 //this.answer=this.ques1.questionOptions;
   
  }

  deleteQuestion(id:number){

    this.service.removeQuestion(id).subscribe(

      data=>{
        console.log(data);
        this.reloadData();
      },
      error=>console.log(error)
      
    );

  }

  questionDetail(id:number)
  {
    this.router.navigate(['detail',id]);
  }


updateQuestion(id:number)
{
  this.router.navigate(['update',id]);
}

}

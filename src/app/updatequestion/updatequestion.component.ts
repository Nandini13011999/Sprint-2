import { Component, OnInit } from '@angular/core';
import { QuestionserviceService } from '../questionservice.service';
import { Question, Answer } from '../question/question';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-updatequestion',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit {
id:Number;
ques:Question;
ans:Answer;

  submitted=false;

  answer1:Answer=new Answer();
  answer2:Answer=new Answer();
  answer3:Answer=new Answer();
  answer4:Answer=new Answer();
  answer:Answer[]=[]
  constructor(private route:ActivatedRoute,private router:Router,private service:QuestionserviceService) { }

  ngOnInit(): void {

    this.ques=new Question();
    this.ans=new Answer();
    this.id=this.route.snapshot.params['id'];

  }
/*
    this.service.searchQuestion(this.id).subscribe(
      data=>{
        console.log(data);
        this.ques=data;
        console.log("id to be updated is "+this.ques.questionId)
        console.log("data is "+this.ques)
      },
      error=>console.log(error)
    );
  }
*/
  updateQuestion(){

    console.log("after on submit update called")
    console.log("udate id "+this.id);
    this.answer.push(this.answer1);
    console.log(this.answer1 )
    this.answer.push(this.answer2);
    console.log(this.answer2 )
    this.answer.push(this.answer3);
    console.log(this.answer3 )
    this.answer.push(this.answer4);
    console.log(this.answer4 )
    this.ques.questionOptions=this.answer;
    console.log("going on "+JSON.stringify(this.ques.questionOptions[0]));

    this.service.updateQuestion(this.id,this.ques).subscribe(
      data=>
      {console.log("udate id "+this.id);
      console.log("udate data "+this.ques);
        console.log("data is "+data)
     
      }
    ,

      error=>console.log("error is "+error)
      
    )
    this.gotoList();
  }

  onSubmit(){
    this.updateQuestion()
  }

  gotoList(){
    this.router.navigate(['/detail'])
  }
}


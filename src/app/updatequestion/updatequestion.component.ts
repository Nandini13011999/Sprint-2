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


import { Component, OnInit } from '@angular/core';
import { Question } from '../question/question';
import { QuestionserviceService } from '../questionservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questiondetails',
  templateUrl: './questiondetails.component.html',
  styleUrls: ['./questiondetails.component.css']
})
export class QuestiondetailsComponent implements OnInit {
id:Number;
ques:Question;
  constructor(private route:ActivatedRoute,
    private service:QuestionserviceService,private router:Router) { }

  ngOnInit(): void {
    this.ques=new Question();
    this.id=this.route.snapshot.params['id'];
   
  }
 

  show(){
  
 
console.log("show called "+this.id);

    this.service.searchQuestion(this.id).subscribe(
      data=>{
        console.log(data)
        this.ques=data;
        
      },
      error=>console.log(error)
    );
    
  }
    updateQuestion(id:Number){
      console.log("update id "+id);
      this.router.navigate(['update/'+id]);
    }
    show1(){
      this.router.navigate(['check/id']);
    }
    addquestion(id:Number){
      console.log("adding id one in id "+id);
      this.router.navigate(['addquestion/'+id]);
    }
     
/*
    this.ques=new Question();
    this.id=this.route.snapshot.params['id'];

    this.service.searchQuestion(this.id).subscribe(
      data=>{
        console.log(data)
        this.ques=data;
      },
      error=>console.log(error)
    );
  }

  list(){
    this.router.navigate(['question']);
  }
*/


}

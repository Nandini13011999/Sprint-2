import { Component, OnInit } from '@angular/core';
import { Question } from '../question/question';
import { QuestionserviceService } from '../questionservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questiondetails',
  templateUrl: './questiondetails.component.html',
  styleUrls: ['./questiondetails.component.css']
})
export class QuestiondetailsComponent implements OnInit {
id:Number;
ques:Question;
isVisible=true;
//crudForm:FormGroup;
inValid=true;
  constructor(private route:ActivatedRoute,
    private service:QuestionserviceService,private router:Router) { }

  ngOnInit(): void {
    this.ques=new Question();
    this.id=this.route.snapshot.params['id'];
    if(this.id==null){
      console.log("id invalid")
      this.inValid=true;
      }
      else
      this.inValid=false;
   
  }
 

  show(){
  this.isVisible=!this.isVisible;
 
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
 
    addquestion(id:Number){
      console.log("adding id one in id "+id);
      this.router.navigate(['addquestion/'+id]);
    }
    deleteQuestion(id:number){

      this.service.removeQuestion(id).subscribe(
  
        data=>{
          console.log(data);
        },
        error=>console.log(error)
        
      );
  
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

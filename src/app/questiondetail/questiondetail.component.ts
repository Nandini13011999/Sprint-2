import { Component, OnInit } from '@angular/core';
import { Question } from '../question/question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionserviceService } from '../questionservice.service';

@Component({
  selector: 'app-questiondetail',
  templateUrl: './questiondetail.component.html',
  styleUrls: ['./questiondetail.component.css']
})
export class QuestiondetailComponent implements OnInit {
ques:Question
id:number
constructor(private route:ActivatedRoute,
  private service:QuestionserviceService,private router:Router) { }

  ngOnInit(): void {
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
  list()
  {
    this.router.navigate(['ques']);
  }


}

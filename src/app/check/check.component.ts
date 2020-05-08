import { Component, OnInit } from '@angular/core';
import { QuestionserviceService } from '../questionservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../question/question';
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
question:Observable<Question[]>;
id:Number;
  constructor(private service:QuestionserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id'];

      this.service.searchQuestion(this.id).subscribe(
  
        data=>{
          console.log(this.id);
          console.log(data);
          this.question=data;
         
        console.log("data is "+this.question)
       
        },
        error=>console.log(error)
        
      );
  
    
  }


}

import { Component, OnInit } from '@angular/core';
import { QuestionserviceService } from '../questionservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Question, Answer } from '../question/question';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  ques:Question=new Question();
  ans:Answer=new Answer();
  submitted=false;
  id:Number;
  constructor(private service:QuestionserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  }


 newQuestion():void{
    this.submitted=false;
    this.ques=new Question();
  //  this.ans=new Answer();
  //  this.id=this.route.snapshot.params['id'];
    console.log("test id in new question is "+this.id);
  }
onSubmit(){
  console.log('on submit called')
  this.submitted=true;
  this.save();
}
  save(){
    console.log('save called')
    console.log("id is "+this.id)
    this.service.saveQuestion(this.id,this.ques).subscribe(
      data=>console.log("data is "+data),error=>console.log(error));
      this.ques= new Question();
      //this.ans=new Answer();
this.gotoList();
  }
  gotoList(){
    this.router.navigate(['/question']);
  }

}

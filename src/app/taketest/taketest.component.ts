import { Component, OnInit } from '@angular/core';
import { Student } from '../list-user/Student';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Question } from '../question/question';

@Component({
  selector: 'app-taketest',
  templateUrl: './taketest.component.html',
  styleUrls: ['./taketest.component.css']
})
export class TaketestComponent implements OnInit {
  student:Student;
    studentid:number=null;
    allQuestions:Question[];
    ques:Question;
    testForm:FormGroup;
    rightAnswer=0;
    totalAnswered = 0;
constructor(  private formBuilder: FormBuilder, 
  private route:ActivatedRoute,
  private router: Router,
  private service: StudentService) { }

  

  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      answer: ['', Validators.required]
    });

    this.student=new Student();
    this.studentid=this.route.snapshot.params['id'];
    this.service.getTestByStudentId(this.studentid)
    .subscribe( res => {
      this.allQuestions = res;
      
    });
  }

   
  submitTest()
  {/*
    document.getElementById('testForm').onsubmit = function() {
      // this (keyword) refers to form to which onsubmit attached
      // 'ship' is name of radio button group
      var val = getRadioVal(document.getElementsByName('testForm'), 'answer');
      // display value obtained
      alert(val);
      // more code here ...
  }*/
    console.log(this.ques.questionOptions)
    this.rightAnswer = 0;
    this.totalAnswered = 0;
    for (let i = 0; i < this.allQuestions.length ; i++) {
      if ("chosenAnswer" in this.allQuestions[i] && (this.allQuestions[i]["chosenAnswer"] != null)) {
        this.totalAnswered++;
        if (this.allQuestions[i]["chosenAnswer"] == this.allQuestions[i]["choice"]) {
          this.rightAnswer++;
        }
      }

    }
    
  }






  




}

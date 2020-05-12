import { Component, OnInit } from '@angular/core';
import { Student } from '../list-user/Student';
import { FormBuilder } from '@angular/forms';
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
    allQuestions:Question;
constructor(  private formBuilder: FormBuilder, 
  private route:ActivatedRoute,
  private router: Router,
  private service: StudentService) { }

  

  ngOnInit(): void {
    this.student=new Student();
    this.studentid=this.route.snapshot.params['id'];
    this.service.getTestByStudentId(this.studentid)
    .subscribe( res => {
      this.allQuestions = res;
      
    });
  }


  submitTest()
  {
    
  }

}

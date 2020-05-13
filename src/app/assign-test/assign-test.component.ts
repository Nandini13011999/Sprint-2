import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MytestService } from '../mytest.service';
import {Student} from '../list-user/Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-assign-test',
  templateUrl: './assign-test.component.html',
  styleUrls: ['./assign-test.component.css']
})
export class AssignTestComponent implements OnInit {
student:Student;
  studentId:number;
  testId:number;
  constructor(private route:ActivatedRoute,private service : MytestService,private router: Router,private serviceStd:StudentService) { }

  ngOnInit(): void {
   this.student=new Student();
    this.studentId=this.route.snapshot.params['id'];
    this.service.searchStudent(this.studentId).subscribe(
      data=>{
       
        this.student=data;
      },
      error=>console.log(error)
    );
  
  }

  assigntest()
  {
    this.service.assigntest(this.studentId,this.testId,this.student).subscribe(
      data=>console.log(data),
      
      error=>console.log(error)
    );
    this.gotoList();

  }

  onSubmit(){
    
    
    this.assigntest()
  }

  gotoList()
  {
  this.router.navigate(['/mytest'])
  
  }


}

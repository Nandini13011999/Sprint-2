import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { UpdateComponent } from '../update/update.component';
import { Student } from './Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
   
   
   studentId: number;
  students:Student[];
  student:Student;


  constructor(private router: Router,private route:ActivatedRoute, private service: StudentService, 
  
    private formBuilder: FormBuilder) { }

  ngOnInit():void {
    this.service.getStudent()
      .subscribe( res => {
        this.students = res;
      
      });

      
 }

 getData(){
   this.service.getStudent().subscribe(data=>{
     this.students=data;
      
   })
 }
sss
 updateStudent(j){
     this.router.navigate(['updateStd/'+j])
    
      
    };

  delete(j):any{
        console.log(j);
        this.service.deleteStudent(j).subscribe(data=>{
          this.getData();
        }
          
        )
       
  };

  
}

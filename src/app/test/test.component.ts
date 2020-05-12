import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { UserAuthenticationService } from '../user-authentication.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  viewForm:FormGroup;
  studentid:Number;
  userid:any;
  constructor(private router: Router,private route:ActivatedRoute, private service: StudentService, private userService:UserAuthenticationService,
    // private alert: MatDialog,
     private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userid=this.userService.userLogin();
    this.viewForm= this.formBuilder.group({
      studentid:["",Validators.required],
      
      
    });
   this.userid= sessionStorage.getItem('id');
  }

  getInputValue(){
    var inputVal = ((document.getElementById("studentid") as HTMLInputElement).value);
           alert(inputVal);
           this.router.navigate(['taketest/'+inputVal])
  }


 
}

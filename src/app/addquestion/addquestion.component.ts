import { Component, OnInit } from '@angular/core';
import { QuestionserviceService } from '../questionservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Question, Answer } from '../question/question';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  ques: Question;
  submitted = false;
  id: Number;
  answer1: Answer = new Answer();
  answer2: Answer = new Answer();
  answer3: Answer = new Answer();
  answer4: Answer = new Answer();
  answer: Answer[] = []

  constructor(private service: QuestionserviceService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ques = new Question();
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit() {


    this.submitted = true;
    this.save();
  }
  save() {
    console.log('save called')
    console.log("id is " + this.id)

    this.answer.push(this.answer1);

    this.answer.push(this.answer2);

    this.answer.push(this.answer3);

    this.answer.push(this.answer4);

    this.ques.questionOptions = this.answer;


    this.service.saveQuestion(this.id, this.ques).subscribe(data => {
      console.log("data is ", data),
        error => console.log(error)
    }
    );
    this.ques = new Question();

    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/question']);
  }

}

import { Component, OnInit, ɵConsole } from '@angular/core';
import { QuestionserviceService } from '../questionservice.service';
import { Question, Answer } from '../question/question';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-updatequestion',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit {
  id: Number;
  ques: Question;
  ans: Answer;

  submitted = false;

  answer1: Answer = new Answer();
  answer2: Answer = new Answer();
  answer3: Answer = new Answer();
  answer4: Answer = new Answer();
  answer: Answer[] = []
  constructor(private route: ActivatedRoute, private router: Router, private service: QuestionserviceService) { }

  ngOnInit(): void {

    this.ques = new Question();
    this.ans = new Answer();
    this.id = this.route.snapshot.params['id'];



  }

  updateQuestion() {

    this.answer.push(this.answer1);

    this.answer.push(this.answer2);

    this.answer.push(this.answer3);

    this.answer.push(this.answer4);

    this.ques.questionOptions = this.answer;


    this.service.updateQuestion(this.id, this.ques).subscribe(
      data =>

        console.log(data),

      error => console.log(error)
    );




    this.gotoList();
  }

  onSubmit() {


    this.updateQuestion()
  }

  gotoList() {
    this.router.navigate(['/detail'])
  }
}


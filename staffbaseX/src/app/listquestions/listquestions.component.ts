import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listquestions',
  templateUrl: './listquestions.component.html',
  styleUrls: ['./listquestions.component.scss']
})
export class ListquestionsComponent implements OnInit {
  constructor() { }
  questions: question[];
  ngOnInit() {
    this.title = 'Default question title';
    this.description = 'this is a descripton for question this is a descripton for question this is a descripton for question ';
    this.questions = ['question1', 'question2' , 'question3' , 'question4'];
  }
}

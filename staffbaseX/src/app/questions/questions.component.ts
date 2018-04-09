import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  title: string;
  description: string;
  rate: number;
  answer: string;
  answerText: string;
  answers = [];
  replyText: string = 'reply an answer';
  constructor() {
  }
  Items: Item[];
  ngOnInit() {
    this.title = 'Default question title';
    this.description = 'this is a descripton for question this is a descripton for question this is a descripton for question ';
    this.rate = 0;
    this.answer = 'my answer to this question';
  }
  answerItem() {
    if (!this.answerText ) {
      return;
    }
    this.answers.unshift(this.answerText);
    this.answerText = '';
  }
  voteItem() {
    this.rate++;
  }
  deleteItem(i) {
    this.answers.splice(i , 1);
  }
}

export class Item {
  constructor(t: string, d: string){
    this.title = t;
    this.description = d;
  }
  title: string;
  description: string;
}

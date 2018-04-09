import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  problems = [];
  itemCount: number;
  btnText: string = 'Ask a question';
  goalText: string;
  title: string;
  description: string;
  rate: number;
  constructor() { }
  questions: question[];
  ngOnInit() {
    this.title = 'Default question title';
    this.description = 'this is a descripton for question this is a descripton for question this is a descripton for question ';
    this.rate = 0;
    this.questions = ['question1', 'question2' , 'question3' , 'question4'];
  }
  addItem(){
    if (!this.goalText ) {
      return;
    }
    this.problems.unshift(this.goalText);
    this.goalText = '';
    this.itemCount = this.problems.length;
  }
  deleteItem(i) {
    this.problems.splice(i , 1);
  }
  voteItem() {
    this.rate++;
  }
}


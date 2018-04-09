import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListquestionsComponent} from './listquestions/listquestions.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},

{
  path: 'questions',
    component: ListquestionsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

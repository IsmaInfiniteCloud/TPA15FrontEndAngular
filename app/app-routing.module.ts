import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddQuizComponent  } from './add-quiz/add-quiz.component';
import { ChooseQuizComponent } from './choose-quiz/choose-quiz.component';


const routes: Routes = [ 
   { path: 'about', component: AboutUsComponent },
   { path: 'add-quiz', component: AddQuizComponent },
   { path: 'choose-quiz', component: ChooseQuizComponent }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

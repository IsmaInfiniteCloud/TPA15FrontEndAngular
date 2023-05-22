import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { ChooseQuizComponent } from './choose-quiz/choose-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AddQuizComponent,
    ChooseQuizComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

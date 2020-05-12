import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { QuestiondetailsComponent } from './questiondetails/questiondetails.component';
import { UpdatequestionComponent } from './updatequestion/updatequestion.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { MytestComponent } from './mytest/mytest.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
     AdminComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    QuestionComponent,
    AddquestionComponent,
    QuestiondetailsComponent,
    UpdatequestionComponent,
    UserLoginComponent,
    CreateTestComponent,
    MytestComponent,
    TestDetailsComponent,
    UpdateTestComponent,
    SignUpComponent,
    ListUserComponent,
    UpdateComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
    HttpClientModule,ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

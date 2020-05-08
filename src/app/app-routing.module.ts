import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { QuestiondetailsComponent } from './questiondetails/questiondetails.component';
import { UpdatequestionComponent } from './updatequestion/updatequestion.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { CheckComponent } from './check/check.component';


const routes: Routes = [

 
  {
    path:'home' ,component:HomeComponent
  }, 

  {
    path:'question' ,component:QuestionComponent
  },
  {
    path:'login' ,component:LoginComponent
  },
  {
    path:'admin' ,component:AdminComponent
  }, 
  
{
  path:'logout',component:LogoutComponent
},
{path:'check/:id',component:CheckComponent},
{path:'addquestion/:id',component:AddquestionComponent},
{path:'detail',component:QuestiondetailsComponent},
   
   {path:'update/:id',component:UpdatequestionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

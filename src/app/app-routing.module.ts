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
import { UserLoginComponent } from './user-login/user-login.component';
import { MytestComponent } from './mytest/mytest.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListUserComponent } from './list-user/list-user.component';
import { TestComponent } from './test/test.component';
import { TaketestComponent } from './taketest/taketest.component';
import { AssignTestComponent } from './assign-test/assign-test.component';
import { QuestiondetailComponent } from './questiondetail/questiondetail.component';
import { UpdateComponent } from './update/update.component';



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
{
  path:'signup',component:SignUpComponent
},
{
  path:'test',component:TestComponent
},
{
  path:'taketest/:id',component:TaketestComponent
},
{
  path:'listUser',component:ListUserComponent
},
{path:'addquestion/:id',component:AddquestionComponent},
{path:'detail',component:QuestiondetailsComponent},
  {path:'user-login',component:UserLoginComponent},
  //{path:'',redirectTo:'ques',pathMatch:'full'},
  {path:'detail/:id',component:QuestiondetailComponent},
   {path:'update/:id',component:UpdatequestionComponent},
   {path:'updateStd/:id',component:UpdateComponent},
   {path:'',redirectTo:'test',pathMatch:'full'},
   {path:'mytest',component:MytestComponent},
   {path:'add',component:CreateTestComponent},
   {path:'updateTest/:id',component:UpdateTestComponent},
   {path:'detail/:id',component:TestDetailsComponent},
   {path:'assign',component:AssignTestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

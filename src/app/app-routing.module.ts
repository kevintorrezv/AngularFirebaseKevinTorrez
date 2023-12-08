import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';



const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'login', component:LoginComponent },
  { path: 'main', component:MainComponent },
  { path: 'edit/:id', component:EditComponent },
  { path: 'show', component:ShowComponent },
  { path: 'create', component:CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
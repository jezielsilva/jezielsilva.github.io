import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './default-page/home/home.component';
import { ProjectsComponent } from './default-page/projects/projects.component';
import { ContactsComponent } from './default-page/contacts/contacts.component';
import { DefaultPageComponent } from './default-page/default-page.component';

const routes: Routes = [


  {path:'', component: DefaultPageComponent, children:[
    {path: 'home', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'index', redirectTo:'home', pathMatch:'full'}

  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

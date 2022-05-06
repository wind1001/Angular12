import { GetDataComponent } from './get-data/get-data.component';
import { TemplateDrivenFromComponent } from './template-driven-from/template-driven-from.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'template-driven-form', component: TemplateDrivenFromComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'get-data', component: GetDataComponent },
  { path: '', component: HomeComponent },
  { path: '**', component:PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

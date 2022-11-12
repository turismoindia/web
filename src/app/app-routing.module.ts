import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './components/description/description.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'package-description',
    component:DescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { DoggoComponent } from './Components/doggo/doggo.component';


const routes: Routes = [
  {path:'', component:AboutComponent},
  {path:'summerveldhoundresort/about', component:AboutComponent},
  {path:'summerveldhoundresort/doggo', component:DoggoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

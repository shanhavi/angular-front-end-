
import { CuisineComponent } from './pages/Restaurants/cuisine/cuisine.component';
import { AddRestaurantsComponent } from './pages/Restaurants/add-restaurants/add-restaurants.component';
import { RestaurantsListComponent } from './pages/Restaurants/restaurants-list/restaurants-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path:'',component:HomeComponent
},{
  path:'about',component:AboutComponent
},{
  path:'cuisine',component:ContactComponent
},{
  path:'Restaurants',
  children: [
    {path:'list-Rest',component:RestaurantsListComponent},
    {path:'add-Rest',component:AddRestaurantsComponent},
    {path:'add-cuisine',component:CuisineComponent},



  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

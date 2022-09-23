import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavinelliAboutComponent } from './components/savinelli-about/savinelli-about.component';
import { SavinelliPipesComponent } from './components/savinelli-pipes/savinelli-pipes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SavinelliPipesComponent },
  { path: 'about', component: SavinelliAboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

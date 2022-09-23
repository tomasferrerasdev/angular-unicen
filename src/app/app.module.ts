import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PipeListComponent } from './components/pipe-list/pipe-list.component';
import { FormsModule } from '@angular/forms';
import { SavinelliAboutComponent } from './components/savinelli-about/savinelli-about.component';
import { CartComponent } from './components/cart/cart.component';
import { SavinelliPipesComponent } from './components/savinelli-pipes/savinelli-pipes.component';
import { InputIntegerComponent } from './components/input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PipeListComponent,
    SavinelliAboutComponent,
    CartComponent,
    SavinelliPipesComponent,
    InputIntegerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

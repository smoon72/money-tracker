import { ApplicationInitStatus, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot([
      {path: 'purchase', component: AddComponent},
      
      // Add a calendar component?
      // {path: '', pathMatch:'full', component: AppComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

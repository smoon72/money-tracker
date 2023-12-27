import { ApplicationInitStatus, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModel, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { FormComponent } from './form/form.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    FormComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'purchase', component: AddComponent},
      {path: 'delete', component: DeleteComponent},
      
      {path: '', pathMatch:'full', redirectTo: 'purchase'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

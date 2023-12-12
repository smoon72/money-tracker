import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPurchaseComponent,
    HomeComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot([
      {path: 'purchase', component: AddPurchaseComponent},
      {path: 'delete', component: DeleteComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

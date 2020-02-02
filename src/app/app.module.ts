import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { CustomerReactiveFormComponent } from './customer/customer-reactive-form/customer-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    CustomerReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

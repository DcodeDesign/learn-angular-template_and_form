import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BaseComponent } from './base/base.component';
import { AnimateComponent } from './animate/animate.component';
import { ContactsTwoComponent } from './contacts-two/contacts-two.component';
import { ContactsThreeComponent } from './contacts-three/contacts-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    BaseComponent,
    AnimateComponent,
    ContactsTwoComponent,
    ContactsThreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

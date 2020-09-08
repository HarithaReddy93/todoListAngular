import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { DisplayListComponent } from './components/display-list/display-list.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { TodoService } from './services/todo.service'
import {DatePipe} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    CreateListComponent,
    DisplayListComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'firebaseConfig'),
    AngularFirestoreModule,
    MatSelectModule,
    NoopAnimationsModule,
    MatRadioModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'createlist',
        component:CreateListComponent
      },
      {
        path:'displaylist',
        component:DisplayListComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
     
    ])
  ],
  providers: [ TodoService,DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }

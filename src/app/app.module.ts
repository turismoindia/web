import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from "@angular/material/card";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DescriptionComponent } from './components/description/description.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';

firebase.initializeApp(environment.firebase)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DescriptionComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    SlickCarouselModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

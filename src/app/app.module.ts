import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DataService} from './data.service';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {DataTableModule} from 'primeng/datatable';
import {AccordionModule} from 'primeng/accordion';     // accordion and accordion tab
import {MenuItem} from 'primeng/api';                 // api

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HighlightDirective } from './highlight.directive';
import { CustomPipe } from './custom.pipe';
import { NguiMapModule} from '@ngui/map';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HighlightDirective,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule,
    HttpClientModule,
    DataTableModule,
    BrowserAnimationsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCDIrEpF7gkwTyclf0IxaEjAju18sFbWaI'})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

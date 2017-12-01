import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from './../app.module';
import { AppComponent } from './../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule,
        BrowserAnimationsModule,
    ],
    declarations: [ HomeComponent ],
    exports: [ HomeComponent ],
    providers: []
})
export class HomeModule { }

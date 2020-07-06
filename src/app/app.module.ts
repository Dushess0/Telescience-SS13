import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { CalculatorComponent } from './calculator/calculator.component';
import { PointComponent } from './point/point.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    PointComponent
  ],
  imports: [
    MatSlideToggleModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { CalculatorComponent } from './calculator/calculator.component';
import { PointComponent } from './point/point.component';
import { TriangulatorComponent } from './triangulator/triangulator.component';
import { MatFormFieldModule  } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    PointComponent,
    TriangulatorComponent
  ],
  imports: [
    MatSlideToggleModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,MatFormFieldModule,MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

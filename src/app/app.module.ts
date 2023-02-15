import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorPageComponent } from './components/pages/calculator-page/calculator-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CalculatorService } from './components/pages/calculator-page/calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorPageComponent,
    HomePageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

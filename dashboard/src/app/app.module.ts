import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { JsonTableComponent } from './components/json-table/json-table.component';
import { DatePipe } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { StyledDivComponent } from './components/styled-div/styled-div.component';
import { ColorBorderDirective } from './directives/color-border.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    JsonTableComponent,
    StyledDivComponent,
    ColorBorderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatSortModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

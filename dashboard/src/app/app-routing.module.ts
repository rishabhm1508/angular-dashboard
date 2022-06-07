import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonTableComponent } from './components/json-table/json-table.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { StyledDivComponent } from './components/styled-div/styled-div.component';

const routes: Routes = [
  {
    path:'navigator',component: NavigatorComponent,
    children:[
      {
        path:'example-json-table', component:JsonTableComponent
      },
      {
        path:'style-div', component:StyledDivComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { MainPageComponent } from './main-page/main-page.component';
import { getAssist } from './getAssist/getAssist.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'get-assistant', component: getAssist },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

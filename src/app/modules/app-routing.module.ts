import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "../app.component";
import {CvComponent} from "../components/cv/cv.component";

const routes: Routes = [

  {path: '', component: AppComponent},
  {path: 'cv', component: CvComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

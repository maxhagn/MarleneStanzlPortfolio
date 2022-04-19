import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./modules/app-routing.module";
import {RouterModule} from "@angular/router";
import {HeroComponent} from './components/hero/hero.component';
import {ContactComponent} from './components/contact/contact.component';
import {CvComponent} from './components/cv/cv.component';
import {FooterComponent} from './components/footer/footer.component';
import {NgScrollbarModule} from "ngx-scrollbar";

registerLocaleData(localeDe, localeDeExtra);

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ContactComponent,
    CvComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule,
    NgScrollbarModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "de"},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

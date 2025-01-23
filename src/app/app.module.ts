import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AbsolutePipe } from './pipe/absolute.pipe';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { loaderInterceptor } from './shared/interceptors/loader.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AbsolutePipe,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),

    { provide: HTTP_INTERCEPTORS, useClass: loaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

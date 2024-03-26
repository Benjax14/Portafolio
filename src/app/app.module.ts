import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [HeaderComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AboutmeComponent],
})
export class AppServerModule {}

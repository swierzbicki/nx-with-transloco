import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { LibWithTranslocoModule } from '@some-example/lib-with-transloco';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    TranslocoPipe,
    TranslocoRootModule,
    LibWithTranslocoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

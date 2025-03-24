import { isDevMode, NgModule } from '@angular/core';
import { provideTransloco, TranslocoModule } from '@jsverse/transloco';
import { TranslocoHttpLoader } from './transloco-loader';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [TranslocoModule],
  imports:[HttpClientModule],
  providers: [
    provideTransloco({
      config: {
        availableLangs: ['en', 'dk'],
        defaultLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
})
export class TranslocoRootModule {}

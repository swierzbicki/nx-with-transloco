import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  provideTransloco,
  provideTranslocoScope,
  TranslocoModule,
  TranslocoPipe
} from '@jsverse/transloco';
import { LibWithTranslocoComponent } from './lib-with-transloco/lib-with-transloco.component';

export const loader = ['en', 'dk'].reduce((acc: Record<string, any>, lang) => {
  acc[lang] = () => import(`../assets/i18n/${lang}.json`);
  return acc;
}, {});

@NgModule({
  declarations: [LibWithTranslocoComponent],
  imports: [CommonModule, TranslocoPipe],
  providers: [ provideTranslocoScope({
    scope: 'dialogs',
    loader
  })],
  exports: [LibWithTranslocoComponent],
})
export class LibWithTranslocoModule {}

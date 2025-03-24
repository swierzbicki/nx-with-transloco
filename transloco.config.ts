import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';

const config: TranslocoGlobalConfig = {
  langs: ['en', 'dk'],
  scopePathMap: {
    dialogs: 'apps/nx-with-transloco/src/assets/i18n/libs/dialogs'
  }
};

export default config;

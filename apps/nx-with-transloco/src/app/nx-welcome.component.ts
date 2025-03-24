import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'some-example-nx-welcome',
  template: `

    <div style="background-color: burlywood">
      {{ 'welcome' | transloco }}
    </div>
  <some-example-lib-with-transloco></some-example-lib-with-transloco>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}

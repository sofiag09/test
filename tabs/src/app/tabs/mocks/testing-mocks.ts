import {Component} from '@angular/core';

@Component({
  selector: 'test-cmp',
  template: `
  <app-tab-group>
    <app-tab label="First">
      1 content
    </app-tab>
    <app-tab label="Second">
      2 content
    </app-tab>
    <app-tab label="Third">
      3 content
    </app-tab>
    <app-tab label="Fourth" [isDisabled]="true">
      4 content
    </app-tab>
  </app-tab-group>
  `,
})
export class TestWrapperComponent {

}

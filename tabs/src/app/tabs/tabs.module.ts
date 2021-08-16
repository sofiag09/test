import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { TabComponent } from './components/tab/tab.component';
import { TabHeaderComponent } from './components/tab-header/tab-header.component';
import { TabBodyComponent } from './components/tab-body/tab-body.component';
import { FocusIndicatorDirective } from './directives/focus-indicator.directive';



@NgModule({
  declarations: [TabGroupComponent, TabComponent, TabHeaderComponent, TabBodyComponent, FocusIndicatorDirective],
  exports: [
    TabGroupComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TabsModule { }

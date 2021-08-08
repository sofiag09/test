import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabGroupComponent {
  @Input() activeTabIndex: number = 0;
  @ContentChildren(TabComponent) listOfTabs: QueryList<TabComponent>;

  constructor() {
  }

  public pickTab(tabIndex: number) {
    this.activeTabIndex = tabIndex;
  }

  get activeElement() {
    return this.listOfTabs.toArray()[this.activeTabIndex]
  }

}

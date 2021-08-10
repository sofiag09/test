import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabHeaderComponent implements OnInit {
  @Input() tabs: QueryList<TabComponent>;
  @Input() activeTabIndex: number;
  @Output() pickTab = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  public selectTab(tab: TabComponent, tabIndex) {
    if (!tab.isDisabled) {
      this.pickTab.emit(tabIndex);
    }
  }

}

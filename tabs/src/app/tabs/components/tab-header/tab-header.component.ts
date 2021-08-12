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

  public handleKeyUp(event: KeyboardEvent | any) {
    switch (event.key) {
      case 'ArrowLeft':
        if (event.target.previousSibling && !event.target.previousSibling.ariaDisabled) {
          event.target.previousSibling.focus();
        }
        break;
      case 'ArrowRight':
        if (event.target.nextSibling && !event.target.nextSibling.ariaDisabled) {
          event.target.nextSibling.focus();
        }
        break;
      case 'Enter':
        if (event.target) {
          const id = +event.target.attributes.itemid.value;
          this.selectTab(this.tabs.toArray()[id], id);
        }
    }
  }

  public handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Home':
        event.preventDefault();
        break;
      case 'End':
        event.preventDefault();
        break;
    }
  }

}

import {ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {
  @ViewChild(TemplateRef, { static: true }) tabContent: TemplateRef<any>;
  @Input() label: string;
  @Input() isDisabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

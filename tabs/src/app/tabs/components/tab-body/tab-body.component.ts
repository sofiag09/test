import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

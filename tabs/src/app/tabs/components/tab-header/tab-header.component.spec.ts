import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabHeaderComponent} from './tab-header.component';
import {By} from '@angular/platform-browser';
import {TabGroupComponent} from '../tab-group/tab-group.component';
import {TestWrapperComponent} from '../../mocks/testing-mocks';
import {TabBodyComponent} from '../tab-body/tab-body.component';
import {TabComponent} from '../tab/tab.component';
import {DebugElement} from '@angular/core';

describe('TabHeaderComponent', () => {
  let component: TabHeaderComponent;
  let fixture: ComponentFixture<TabHeaderComponent>;
  let tabElements: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TabGroupComponent,
        TestWrapperComponent,
        TabBodyComponent,
        TabComponent,
        TabHeaderComponent
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabHeaderComponent);
    component = fixture.componentInstance;

    component.tabs = [
      {label: 'tab 1', isDisabled: false},
      {label: 'tab 2', isDisabled: false},
      {label: 'tab 3', isDisabled: false},
      {label: 'tab 4', isDisabled: true},
    ] as any;
    fixture.detectChanges();

    tabElements = fixture.debugElement.queryAll(By.css('.tab-header__label'));
    console.log(tabElements);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selectTab() should emit index', () => {
    spyOn(component.pickTab, 'emit');
    fixture.detectChanges();

    const index = 2;
    tabElements[index].nativeElement.click();
    expect(component.pickTab.emit).toHaveBeenCalled();
    expect(component.pickTab.emit).toHaveBeenCalledWith(index);
  });

  it('selectTab() should not emit index if tab is disabled', () => {
    spyOn(component.pickTab, 'emit');
    fixture.detectChanges();

    tabElements[3].nativeElement.click();
    expect(component.pickTab.emit).not.toHaveBeenCalled();
  });

  it('handleKeyUp() should change focus', () => {
    spyOn(component, 'handleKeyUp');
    fixture.detectChanges();

    const el = fixture.debugElement.query(By.css('.tab-header__label')).nativeElement;
    const event = new KeyboardEvent("keyup", {
      'key': "ArrowRight"
    });
    el.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.handleKeyUp).toHaveBeenCalled();
  });
});

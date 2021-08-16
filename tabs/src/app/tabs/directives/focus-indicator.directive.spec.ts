import { FocusIndicatorDirective } from './focus-indicator.directive';
import {TestWrapperComponent} from '../mocks/testing-mocks';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TabGroupComponent} from '../components/tab-group/tab-group.component';
import {TabBodyComponent} from '../components/tab-body/tab-body.component';
import {TabComponent} from '../components/tab/tab.component';
import {TabHeaderComponent} from '../components/tab-header/tab-header.component';
import {DebugElement} from '@angular/core';

describe('FocusIndicatorDirective', () => {
  let fixture: ComponentFixture<TabHeaderComponent>;
  let component: TabHeaderComponent;
  let tabElements: DebugElement[];

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [
        TabGroupComponent,
        TestWrapperComponent,
        TabBodyComponent,
        TabComponent,
        TabHeaderComponent,
        FocusIndicatorDirective,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TabHeaderComponent);
    component = fixture.componentInstance;

    component.tabs = [
      {label: 'tab 1', isDisabled: false},
      {label: 'tab 2', isDisabled: false},
      {label: 'tab 3', isDisabled: false},
      {label: 'tab 4', isDisabled: true},
    ] as any;
    fixture.detectChanges();

    tabElements = fixture.debugElement.queryAll(By.directive(FocusIndicatorDirective));
  });

  it('markLabelAsSelected should be called by click', () => {
    const directive = new FocusIndicatorDirective(tabElements[1]);
    spyOn(directive, 'markLabelAsSelected');
    fixture.detectChanges();
    directive.onClick({target: tabElements[1].nativeElement});
    expect(directive.markLabelAsSelected).toHaveBeenCalled()
  });

  it('markLabelAsSelected should be called by enter key', () => {
    const directive = new FocusIndicatorDirective(tabElements[1]);
    spyOn(directive, 'markLabelAsSelected');
    fixture.detectChanges();
    directive.onKeydownHandler({key: 'Enter', target: tabElements[1].nativeElement} as any);
    expect(directive.markLabelAsSelected).toHaveBeenCalled()
  });

  it('markLabelAsSelected should not be called by "not enter" key', () => {
    const directive = new FocusIndicatorDirective(tabElements[1]);
    spyOn(directive, 'markLabelAsSelected');
    fixture.detectChanges();
    directive.onKeydownHandler({key: 'ArrowLeft', target: tabElements[1].nativeElement} as any);
    expect(directive.markLabelAsSelected).not.toHaveBeenCalled()
  });

  it('should underscore 1st tab', () => {
    const underscore = fixture.debugElement.query(By.css('.tab-header__active-label'));
    fixture.detectChanges();
    const tabWidth = tabElements[0].nativeElement.style.clientWidth;
    const tabOffset = tabElements[0].nativeElement.style.offsetLeft;
    expect(underscore.nativeElement.style.clientWidth).toBe(tabWidth);
    expect(underscore.nativeElement.style.offsetLeft).toBe(tabOffset);
  });

  it('should underscore tab after select', () => {
    const underscore = fixture.debugElement.query(By.css('.tab-header__active-label'));
    fixture.detectChanges();
    component.selectTab(component.tabs[1], 1);
    const tabWidth = tabElements[1].nativeElement.style.clientWidth;
    const tabOffset = tabElements[1].nativeElement.style.offsetLeft;
    expect(underscore.nativeElement.style.clientWidth).toBe(tabWidth);
    expect(underscore.nativeElement.style.offsetLeft).toBe(tabOffset);
  });
});

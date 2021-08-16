import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TabGroupComponent} from './tab-group.component';
import {TestWrapperComponent} from '../../mocks/testing-mocks';
import {TabBodyComponent} from '../tab-body/tab-body.component';
import {TabComponent} from '../tab/tab.component';
import {TabHeaderComponent} from '../tab-header/tab-header.component';

describe('TabsComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TabGroupComponent,
        TestWrapperComponent,
        TabBodyComponent,
        TabComponent,
        TabHeaderComponent
      ],
      //schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('start index should be defined', function () {
    expect(component['activeTabIndex']).toBeDefined();
  });

  it('pickTab() should change tab index', function () {
    const tabComp = component as TabGroupComponent;
    tabComp.pickTab(1);
    expect(tabComp.activeTabIndex).toEqual(1);
  });
});

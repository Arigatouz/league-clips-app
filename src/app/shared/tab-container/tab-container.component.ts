import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss'],
})
export class TabContainerComponent implements OnInit, AfterContentInit {
  //  if we wanna get the tabs under the container
  /*
   * this is optional
   *
   */
  @ContentChildren(TabsComponent) tabs: QueryList<TabsComponent> =
    new QueryList();
  constructor() {}

  ngOnInit(): void {}
  // we use AfterContentInit to wait for the component in side to be initialized
  // we can't use OnInit coz the component will not be initialized yet
  ngAfterContentInit(): void {
    const activeTab = this.tabs.filter((tab) => tab.active);
    // if there is no tabs in the tabs array it will select the first tab and make it true from the function
    // selectedTab
    if (!activeTab || activeTab.length === 0) {
      //! ****** -  i wanna know what is the bang operator means after this generic array (this.tabs!) <==
      //? this will mean the value before the bang operator will not be null or undefined

      this.selectedTab(this.tabs!.first);
    }
  }
  //  declaration of the selected tab function so we can set the selected tab to tab.active = true
  selectedTab = (TAB: TabsComponent): boolean => {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });

    TAB.active = true;
    //  we include the return false here so we can prevent default behavior of the anchor tag
    // no you won't see # after the link up in the link address bar
    return false;
  };
  // changing the style of the button based on (if it selected or not)
  changeStyle = (TAB: TabsComponent): object => {
    return {
      'hover:text-indigo-400': !TAB.active,
      'hover:text-white text-white bg-indigo-400': TAB.active,
    };
  };
}

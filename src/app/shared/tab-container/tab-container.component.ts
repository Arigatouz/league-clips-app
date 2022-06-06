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
    this.tabs.map((e) => console.log(e));
  }
}

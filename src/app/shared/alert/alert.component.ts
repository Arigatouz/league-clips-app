import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, AfterContentChecked {
  @Input() color: string = 'blue';

  constructor() {
    console.log('constructor', this.bgColor);
  }

  ngOnInit(): void {
    console.log('onInit', this.bgColor);
  }
  // the get keyword here is to treat the function as a getter function

  ngAfterContentChecked(): void {
    console.log(this.bgColor);
  }
  get bgColor() {
    return `bg-${this.color}-400`;
  }
}

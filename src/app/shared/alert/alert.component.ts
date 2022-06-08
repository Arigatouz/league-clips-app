import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, AfterContentChecked {
  @Input() color: string = 'red';

  constructor() {}

  ngOnInit(): void {}
  // the get keyword here is to treat the function as a getter function
  get bgColor() {
    return `bg-${this.color}-400`;
  }
  ngAfterContentChecked(): void {
    console.log(this.bgColor);
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { getAnalytics, logEvent } from 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {
    const analytics = getAnalytics();
    logEvent(analytics, 'page_view');
  }
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ErrorHandlingService } from './services/error-handling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'error-handler';

  constructor() {
    console.log('App component constructed');
  }

  ngOnInit(): void {
    console.log('App component initialized');
  }
}

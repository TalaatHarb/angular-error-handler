import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ErrorHandlingService } from '../services/error-handling.service';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit {

  counter = 0;
  errorValues: any[] = [];


  constructor(private changeDetectorReference: ChangeDetectorRef) {
    console.log('ErrorHandler component constructed');
  }

  ngOnInit(): void {
    console.log('ErrorHandler component initialized');
    ErrorHandlingService.error.subscribe(value => {
      console.log('Notified ' + (++this.counter));
      this.errorValues.push(value + ' ' + this.counter);
      this.changeDetectorReference.detectChanges();
    });
  }

  get errors() {
    return this.errorValues;
  }

  delete(index) {
    this.errorValues.splice(index, 1);
    this.changeDetectorReference.detectChanges();
  }

}

import { Injectable, ErrorHandler } from '@angular/core';
import { NEVER, Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService implements ErrorHandler {

  static error: Subject<any> = new Subject<any>();

  constructor() {
  }

  handleError(e: any) {
    console.log('Found error');
    ErrorHandlingService.error.next(e.message);
  }
}

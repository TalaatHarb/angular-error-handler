import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActionService {


  constructor(private httpClient: HttpClient) {
  }

  doAction() {
    console.log('Doing the action');
    return this.httpClient.get<any>('https://google.com');
  }

}

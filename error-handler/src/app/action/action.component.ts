import { Component, OnInit } from '@angular/core';
import { ActionService } from '../services/action.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  constructor(private actionService: ActionService) {
    console.log('Action component constructed');
  }

  ngOnInit() {
    console.log('Action component initialized');
  }

  test() {
    console.log('Test called');
    this.actionService.doAction().subscribe(result => {
      console.log('Action Works fine');
      console.log(result);
    });
  }

}

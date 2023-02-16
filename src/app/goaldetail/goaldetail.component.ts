import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goaldetail',
  templateUrl: './goaldetail.component.html',
  styleUrls: ['./goaldetail.component.scss']
})
export class GoaldetailComponent {
  @Input()
  goal!: Goal;

  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

}

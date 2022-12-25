import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Plan } from 'src/app/shared/model/week-plan-form-model';

@Component({
  selector: 'app-form-filler',
  templateUrl: './form-filler.component.html',
  styleUrls: ['./form-filler.component.css'],
})
export class FormFillerComponent implements OnInit {
  planItem: Plan = new Plan();
  @Output()
  onPlanSaveEmitter: EventEmitter<Plan> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSavePlanBtn() {
    this.onPlanSaveEmitter.emit(this.planItem);
    this.planItem = new Plan();
  }
}

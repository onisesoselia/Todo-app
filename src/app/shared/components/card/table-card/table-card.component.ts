import { Component, Input, OnInit } from '@angular/core';
import { Plan } from 'src/app/shared/model/week-plan-form-model';
import { PlanDataService } from 'src/app/shared/services/plan-data.service';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.css'],
})
export class TableCardComponent implements OnInit {
  @Input()
  planItem: Plan = new Plan();
  constructor(private manageService: PlanDataService) {}

  ngOnInit(): void {}

  planDeleteBtn(item: Plan) {
    this.manageService.planDeleteEmitter.emit(item);
  }
}

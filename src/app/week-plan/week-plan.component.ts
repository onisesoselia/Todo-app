import { Component, OnInit } from '@angular/core';
import { PlanTask } from '../shared/model/table-plan-model';
import { Plan } from '../shared/model/week-plan-form-model';
import { PlanDataService } from '../shared/services/plan-data.service';

@Component({
  selector: 'app-week-plan',
  templateUrl: './week-plan.component.html',
  styleUrls: ['./week-plan.component.css'],
})
export class WeekPlanComponent implements OnInit {
  planlist: PlanTask = new PlanTask();
  constructor(private manageService: PlanDataService) {}

  ngOnInit(): void {
    this.manageService.planDeleteEmitter.subscribe((request: Plan) => {
      let planItemIndex = this.planlist.monday.findIndex(
        (item) => item.id == request.id
      );
      if (planItemIndex >= 0) {
        this.planlist.monday.splice(planItemIndex, 1);
      }
      planItemIndex = this.planlist.tuesday.findIndex(
        (item) => item.id == request.id
      );
      if (planItemIndex >= 0) {
        this.planlist.tuesday.splice(planItemIndex, 1);
      }
      planItemIndex = this.planlist.wednesday.findIndex(
        (item) => item.id == request.id
      );
      if (planItemIndex >= 0) {
        this.planlist.wednesday.splice(planItemIndex, 1);
      }
      planItemIndex = this.planlist.thursday.findIndex(
        (item) => item.id == request.id
      );
      if (planItemIndex >= 0) {
        this.planlist.thursday.splice(planItemIndex, 1);
      }
      planItemIndex = this.planlist.friday.findIndex(
        (item) => item.id == request.id
      );
      if (planItemIndex >= 0) {
        this.planlist.friday.splice(planItemIndex, 1);
      }
      planItemIndex = this.planlist.saturday.findIndex(
        (item) => item.id == request.id
      );
      if (planItemIndex >= 0) {
        this.planlist.saturday.splice(planItemIndex, 1);
      }
      planItemIndex = this.planlist.sunday.findIndex(
        (item) => item.id == request.id
      );
      if (planItemIndex >= 0) {
        this.planlist.sunday.splice(planItemIndex, 1);
      }
    });
  }

  onPlanSaveSubs(plan: Plan) {
    this.planlist.addNewPlan(plan);
    console.log(this.planlist);
  }
}

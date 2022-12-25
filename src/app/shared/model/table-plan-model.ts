import { Plan } from '../model/week-plan-form-model';
import { Day } from './day-model';

export class PlanTask {
  public monday: Plan[] = [];
  public tuesday: Plan[] = [];
  public wednesday: Plan[] = [];
  public thursday: Plan[] = [];
  public friday: Plan[] = [];
  public saturday: Plan[] = [];
  public sunday: Plan[] = [];

  addNewPlan(planItem: Plan) {
    switch (planItem.day.toString()) {
      case 'monday':
        this.monday.push(planItem);
        break;
      case 'tuesday':
        this.tuesday.push(planItem);
        break;
      case 'wednesday':
        this.wednesday.push(planItem);
        break;
      case 'thursday':
        this.thursday.push(planItem);
        break;
      case 'friday':
        this.friday.push(planItem);
        break;
      case 'saturday':
        this.saturday.push(planItem);
        break;
      case 'sunday':
        this.sunday.push(planItem);
        break;
    }
  }
}

import { EventEmitter, Injectable } from '@angular/core';
import { Plan } from '../model/week-plan-form-model';

@Injectable({
  providedIn: 'root',
})
export class PlanDataService {
  public planDeleteEmitter: EventEmitter<Plan> = new EventEmitter();

  constructor() {}
}

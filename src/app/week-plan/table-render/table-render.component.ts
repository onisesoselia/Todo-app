import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { PlanTask } from 'src/app/shared/model/table-plan-model';
import { Plan } from 'src/app/shared/model/week-plan-form-model';

@Component({
  selector: 'app-table-render',
  templateUrl: './table-render.component.html',
  styleUrls: ['./table-render.component.css'],
})
export class TableRenderComponent implements OnInit {
  @Input()
  planTask: PlanTask = new PlanTask();

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<Plan[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

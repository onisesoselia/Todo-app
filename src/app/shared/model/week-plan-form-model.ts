import { Day } from './day-model';
import { StatusType } from './status-type-model';

export class Plan {
  public id!: string;
  public title!: string;
  public day!: Day;
  public time!: string;
  public description!: string;
  public statusType!: StatusType;

  constructor() {
    this.id = this.newGuid();
    this.statusType = StatusType.toDo;
  }

  private newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}

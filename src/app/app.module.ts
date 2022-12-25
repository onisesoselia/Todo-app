import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeekPlanComponent } from './week-plan/week-plan.component';
import { FormFillerComponent } from './week-plan/form-filler/form-filler.component';
import { TableRenderComponent } from './week-plan/table-render/table-render.component';
import { TableCardComponent } from './shared/components/card/table-card/table-card.component';
import { PlanDataService } from './shared/services/plan-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    WeekPlanComponent,
    FormFillerComponent,
    TableRenderComponent,
    TableCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, DragDropModule],
  providers: [PlanDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

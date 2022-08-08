import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature/feature.component';
import { TaskComponent } from './task/task.component';
import { StepComponent } from './step/step.component';


@NgModule({
  declarations: [
    FeatureComponent,
    TaskComponent,
    StepComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeatureComponent,
    TaskComponent,
    StepComponent,
  ]
})
export class ComponentsModule { }

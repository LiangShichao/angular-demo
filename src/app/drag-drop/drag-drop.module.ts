import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { IndexComponent } from '@drag-drop/index/index.component';
import { DrawAreaComponent } from '@drag-drop/draw-area/draw-area.component';
import { ToolListComponent } from '@drag-drop/tool-list/tool-list.component';
import { ShareModule } from '@share/share.module';



const router: Routes = [
  {
      path: 'index',
      component: IndexComponent,
  },
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'index',
  }
];


@NgModule({
  declarations: [
    IndexComponent,
    DrawAreaComponent,
    ToolListComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    ShareModule,
    RouterModule.forChild(router)
  ]
})
export class DragDropModule { }

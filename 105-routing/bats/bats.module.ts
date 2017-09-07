import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BatsComponent } from './bats.component';
import { SharedModule } from '../shared/shared.module';

const batsRoutes: Routes = [
  {path: '', component: BatsComponent}
]

@NgModule({
  declarations: [ 
    BatsComponent
  ],
  exports: [ BatsComponent ],
  imports: [ SharedModule, CommonModule, RouterModule.forChild(batsRoutes)  ],
  providers: [  ]
})
export class BatsModule { }
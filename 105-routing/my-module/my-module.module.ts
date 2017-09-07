import { NgModule } from '@angular/core';
import { MyComponentComponent } from './my-component.component';
import { MyOtherComponentComponent } from './my-other-component.component';

@NgModule({
  declarations: [ 
    MyComponentComponent,
    MyOtherComponentComponent
  ],
  exports: [  ],
  imports: [  ],
  providers: [  ]
})
export class MyModuleModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeRetrieverService } from './employee-retriever.service';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  {
    path: 'employee/:employeeId',
    component: EmployeeDetailComponent,
    resolve: { employee: EmployeeRetrieverService }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [EmployeeRetrieverService]
})
export class AppRoutingModule { }

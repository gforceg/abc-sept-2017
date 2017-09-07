import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employee: string;
  // Implicit public, equivalent to
  // public version: string;
  // (public is the default in TypeScript.)
  // Angular.io style guide recommends implicit public.
  daysWorked = 81;
  daysSinceLastAccident = 2
  // If the value is known at initialization, it is ok to do so here.
  company: { name: string;};
  employeeOfTheWeek: {
    name: string;
    picture: string;
    hireDate: Date;
  };

  constructor() {
    this.employee = 'John Doe';
    this.company = { name: 'Acme, Inc.'};
    this.employeeOfTheWeek = {
      name: 'Jane Smith',
      picture: '../demo-data/images/avatar.png',
      hireDate: new Date('9/6/2015')
    };
  }
}

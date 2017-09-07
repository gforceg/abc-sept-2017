import { Component } from '@angular/core';

import { scheduleMap } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'John Doe';
  message: string;
  currentSchedule: string;
  height = 100
  clockIn(event: MouseEvent) {
    if (event.shiftKey) {
      this.message = 'Clocked in as manager!';
    } else {
      this.message = 'Clocked in as employee';
    }
  }

  clockOut() {
    this.message = 'Have a nice day!';
  }

  showSchedule(day: string) {
    this.currentSchedule = scheduleMap[day];
  }

  clearSchedule() {
    this.currentSchedule = '';
  }
  
  resize(event: WheelEvent) {
    if (event.deltaY > 0 && this.height > 60) {
      this.height -= 10
    } else if (event.deltaY < 0) {
      this.height += 10
    }
  }
}

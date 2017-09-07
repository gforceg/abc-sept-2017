import { Component } from '@angular/core';

@Component({
  selector: 'cafeteria-search',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Cafeteria Functionality</span>
        <div>Search for Cafeteria Records</div>
        <search-box></search-box>
      </div>
    </div>
  `
})
export class CafeteriaSearchComponent { }

import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: `bats-selector`,
  moduleId: __moduleName,
  templateUrl: `./bats.component.html`
})

export class BatsComponent implements OnInit {
  const species = [
    'fruit bat', 'vampire bat', 'egyption fruit bat', 'little brown bat']
  constructor() {

  }

  ngOnInit() {

  }
}
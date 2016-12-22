import { Component, OnInit } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { RouterModule, Routes, Router } from '@angular/router';
import { appRoutes } from './app.routes';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

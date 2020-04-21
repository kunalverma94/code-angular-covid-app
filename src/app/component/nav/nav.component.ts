import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  hideNav = false;
  constructor() {}

  ngOnInit(): void {}
  toggle = () => (this.hideNav = !this.hideNav);
}

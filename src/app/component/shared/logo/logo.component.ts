import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
  @Input() size = 50;
  @Input() color = '#fff';

  constructor() {}

  ngOnInit(): void {}
}

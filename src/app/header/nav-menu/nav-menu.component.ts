import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  @Output() status = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  toggleStatus() {
    setTimeout(() => {
      this.status.emit('false');
    }, 200);
  }
}

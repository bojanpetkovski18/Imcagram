import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public imgPath: String = '../../assets/images/';
  public open: Boolean = false;
  public showModal: Boolean = true;
  constructor() {}

  ngOnInit() {}

  public toggleOpen(status: string) {
    this.open = false;
  }

  public onClose(show: boolean) {
    this.showModal = show;
  }

  public onShow() {
    this.showModal = true;
  }
}

import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-extendable-fab',
  templateUrl: './extendable-fab.component.html'
})
export class ExtendableFabComponent implements OnInit {
  @HostBinding('class.active')
  public isActive: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  toggle(): void {
    this.isActive = !this.isActive;
  }
}

import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html'
})
export class DrawerComponent {
  @HostBinding('class.active')
  isActive: boolean;

  toggle(): void {
    this.isActive = !this.isActive;
  }
}

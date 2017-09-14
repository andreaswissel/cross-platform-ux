import {Component, Input, OnInit} from '@angular/core';
import {DrawerComponent} from '../drawer/drawer.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent {
  @Input()
  public navigationDrawer: DrawerComponent;
}

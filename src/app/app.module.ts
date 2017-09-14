import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ExtendableFabComponent } from './extendable-fab/extendable-fab.component';
import { UserComponent } from './user/user.component';
import { DrawerComponent } from './drawer/drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TopBarComponent,
    ExtendableFabComponent,
    UserComponent,
    DrawerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

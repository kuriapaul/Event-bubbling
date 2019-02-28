import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StopEventBubblingDirective } from './directives/stop-event-bubbling.directive';

@NgModule({
  declarations: [AppComponent, StopEventBubblingDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

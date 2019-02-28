import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-directives';

  /**
   * Parent div click event handler for
   * @param - event
   */
  parentClicked(event: any) {
    alert(`Div clicked!`);
  }

  /**
   *
   * @param event - click event
   */
  childClicked(event: any) {
    alert(`Button clicked!`);
  }
}

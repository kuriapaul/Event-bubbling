import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  parentClicked() {
    alert('Div clicked');
  }

  childClicked() {
   
    alert('Button clicked');
  }
}

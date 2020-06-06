import { Component } from '@angular/core';
import { faHandRock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'justimagineit';
  handRock = faHandRock;
}

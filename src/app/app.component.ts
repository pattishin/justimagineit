import { Component } from '@angular/core';
import { faHandsHelping, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'justimagineit';
  helpingHands = faHandsHelping;
  heart = faHeart;
}

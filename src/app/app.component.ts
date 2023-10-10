import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = {
    Germany: "Berlin",
    Azerbaijan: "Baku",
    Poland: "Warsaw",
    "Papua New Guinea": "Port Moresby"
  }
}

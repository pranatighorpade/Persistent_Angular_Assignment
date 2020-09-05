import { Component } from '@angular/core';
import { ThemeService } from '../app/theme/theme.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Electronics Product Management System';

  darkTheme =  new FormControl(false);

  constructor(private themeService: ThemeService) {
    this.darkTheme.valueChanges.subscribe(value => {
      console.log(value);
      if (value) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
    });
  }
}

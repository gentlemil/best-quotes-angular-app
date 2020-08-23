import { Component } from '@angular/core';
import { QUOTES } from '../app/models/database';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  showForm = false;   // pole do wysw. formularza
  quotes: Quotation[] = QUOTES;

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

}
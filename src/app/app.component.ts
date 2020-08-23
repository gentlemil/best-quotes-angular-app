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
  quotes: Quotation[] = QUOTES;   //nowe pole repr.liste cytatow
  quotation: Quotation = {
    author: '',
    sentence: '',
    votes: 0
  };  // pole w komp. do przechow. danych wpisywanych na stronie

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.quotes.unshift(this.quotation);  //dodaje elem. na poczatek listy
    this.quotation = {
      author: '',
      sentence: '',
      votes: 0
    };   // resetujemy obiekt quotation przypisujac mu puste wartosci
  }


}
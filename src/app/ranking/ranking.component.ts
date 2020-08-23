import { Component, Input } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
  @Input() quotes: Quotation[];  
  //typem jest lista cytatow, nie trzeba jej inicjalizowac, bedzie undefined, wiec 
  // *ngFor nie bedzie na niej pracowac
  @Input() title: string;
}

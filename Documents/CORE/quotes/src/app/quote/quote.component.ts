import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'Inspirational Quote', 'It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.', 
    'J.K Rowlings', 'Mrs. Bati', new Date(2020,8,23)),
    new Quote(2, 'Motivation Quote','You may encounter many defeats, but you must not be defeated.In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.',
    'Maya Angelou', 'Chebet Edda', new Date(2020,8,20)), 
    
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription; 
  }

  completequote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

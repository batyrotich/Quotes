import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.', 
    'J.K Rowlings', 'Mrs. Bati', new Date(2020,8,23),0,0),
    new Quote(2,'You may encounter many defeats, but you must not be defeated.In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.',
    'Maya Angelou', 'Chebet Edda', new Date(2020,8,20),0,0), 
    
  ];
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postingDate = new Date()

    if (quote.author === '' || quote.author === '' || quote.blogger === '') {
      alert('all fields are required!')
    } else {
      alert('Your Quote has been added Successfully')
      this.quotes.push(quote);

    }
  }
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription; 
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  upVote: number = 0;
  downVote: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  countLikeclick() {
    this.upVote += 1;
  }
  countDislikeclick() {
    this.downVote += 1;
  }
}
